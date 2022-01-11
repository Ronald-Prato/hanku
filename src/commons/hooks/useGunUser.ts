import { useDispatch, useSelector } from "react-redux";
import { Entities } from "../../constants";
import { gun } from "../../gun";
import { Ranks, User } from "../contracts/user.contracts";
import { RootState } from "../store";
import { setUserData } from "../store/user/user.party";

export const useGunUser = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state: RootState) => state.user.uid);

  const getUser = ({
    noUserCallback,
    userSet,
  }: {
    noUserCallback?: () => void;
    userSet?: () => void;
  }) => {
    gun
      .get(uid)
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

      console.log("User Data ", userData);

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

  return { getUser, createUser };
};
