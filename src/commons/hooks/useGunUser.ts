import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Entities } from "../../constants";
import { gun } from "../../gun";
import { Ranks, User } from "../contracts/user.contracts";
import { RootState } from "../store";
import { setUserAvatar, setUserData } from "../store/user/user.party";

export const useGunUser = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state: RootState) => state.user.uid);

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
      .get(saveUserInState ? userId || uid : userId!)
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
        uid,
        nickname,
        avatar,
        lvl: 0,
        lvlPoints: 0,
        rank: Ranks.Copper,
      };

      const newUser = gun.get(uid).put({
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
    gun.get(uid).get("data").put({ avatar: newAvatar });
    dispatch(setUserAvatar(newAvatar));
    updatedCallback && updatedCallback();
  };

  const updateAllUserInfo = (newUser: User) => {
    gun.get(uid).put({ data: newUser });
    dispatch(setUserData(newUser));
  };

  return { getUser, createUser, updateAvatar, localUser, updateAllUserInfo };
};
