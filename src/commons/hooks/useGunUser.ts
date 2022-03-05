import { useDispatch, useSelector } from "react-redux";
import { Entities } from "../../constants";
import { gun } from "../../gun";
import { Ranks, User } from "../contracts/user.contracts";
import { RootState } from "../store";
import { setUserAvatar, setUserData } from "../store/user/user.party";

export const useGunUser = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state: RootState) => state.user.uid);

  const getUser = ({
    noUserCallback,
    userSet,
    userId,
  }: {
    noUserCallback?: () => void;
    userSet?: () => void;
    userId?: string;
  }) => {
    gun
      .get(userId || uid)
      .get("data")
      .once((_user) => {
        if (!_user) {
          noUserCallback && noUserCallback();
          return;
        }

        const { nickname, avatar, rank, lvl, lvlPoints, uid } = _user;

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

  return { getUser, createUser, updateAvatar };
};
