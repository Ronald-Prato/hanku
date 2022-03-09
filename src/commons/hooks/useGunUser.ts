import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Entities } from "../../constants";
import { gun } from "../../gun";
import { getNewRank } from "../../modules/Match/utils/rankManagementUtils";
import { Ranks, User } from "../contracts/user.contracts";
import { RootState } from "../store";
import { setUserAvatar, setUserData } from "../store/user/user.party";

export const useGunUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [localUser, setLocalUser] = useState<User>({} as User);

  const getUser = ({
    noUserCallback,
    userSet,
    userId,
    saveUserInState = true,
  }: {
    noUserCallback?: () => void;
    userSet?: () => void;
    userId?: string;
    saveUserInState?: boolean;
  }) => {
    // If we dispatch the user to redux, use our userId or any other user, otherwise, use the one we pass over so we can set it locally
    gun
      .get(saveUserInState ? userId || user.uid : userId!)
      .get("data")
      .once((_user) => {
        if (!_user) {
          noUserCallback && noUserCallback();
          return;
        }

        const { nickname, avatar, rank, lvl, lvlPoints, uid } = _user;

        if (saveUserInState) {
          dispatch(
            setUserData({
              uid,
              lvl,
              rank,
              avatar,
              nickname,
              lvlPoints,
            })
          );
          userSet && userSet();
        } else {
          setLocalUser({ uid, lvl, rank, avatar, nickname, lvlPoints });
        }
      });
  };

  const getCustomUser = (
    userId: string,
    callback: (user: User | null) => void
  ) => {
    gun
      .get(userId)
      .get("data")
      .once((_user: any) => {
        const typedUser: User = _user;

        callback(typedUser);
      });
  };

  const createUser = ({
    nickname,
    avatar,
    createdCallback,
    errorCallback,
  }: {
    nickname: string;
    avatar: string;
    createdCallback: () => void;
    errorCallback?: () => void;
  }) => {
    try {
      const userData: User = {
        uid: user.uid,
        nickname,
        avatar,
        lvl: 0,
        lvlPoints: 0,
        rank: Ranks.Copper,
      };

      const newUser = gun.get(user.uid).put({
        data: userData,
      });

      gun.get(Entities.User).set(newUser);
      createdCallback();
    } catch (err) {
      console.log(err);
      errorCallback && errorCallback();
    }
  };

  const updateAvatar = (newAvatar: string, updatedCallback?: () => void) => {
    console.log(" New avatar: ", newAvatar);
    gun.get(user.uid).get("data").put({ avatar: newAvatar });
    dispatch(setUserAvatar(newAvatar));
    updatedCallback && updatedCallback();
  };

  const updateAllUserInfo = (newUser: User) => {
    gun.get(user.uid).put({ data: newUser });
    dispatch(setUserData(newUser));
  };

  const updatePlayerScore = ({
    option,
    customId,
    callback,
  }: {
    option: "add" | "subtract";
    customId?: string;
    callback: (newPointsAmount: number) => void;
  }) => {
    gun
      .get(customId || user.uid)
      .get("data")
      .once((_user: any) => {
        let newPointsAmmount = 0;
        let newRank: Ranks = user.rank;
        const pointsDifference = 1;

        // TODO: Add real points management according to rank and match time.
        if (option === "add") {
          newPointsAmmount = user.lvlPoints + pointsDifference;
          newRank = getNewRank(user.rank, newPointsAmmount);
          callback(1);
        }

        if (option === "subtract") {
          newPointsAmmount =
            user.lvlPoints > 0 ? user.lvlPoints - pointsDifference : 0;
          newRank = getNewRank(user.rank, newPointsAmmount);
          callback(-pointsDifference);
        }

        const updatedUser: User = {
          ...user,
          lvlPoints: newPointsAmmount,
          rank: newRank,
        };

        updateAllUserInfo(updatedUser);
      });
  };

  return {
    getUser,
    createUser,
    updateAvatar,
    localUser,
    updateAllUserInfo,
    updatePlayerScore,
    getCustomUser,
  };
};
