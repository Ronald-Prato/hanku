import { User } from "../../contracts/user.contracts";
import { typedAction } from "../helpers";

const _setUserData = (userData: User) => {
  return typedAction("user/SET_USER_DATA", userData);
};

const _setUserUid = (uid: string) => {
  return typedAction("user/SET_USER_UID", uid);
};

const _setUserAvatar = (newAvatar: string) => {
  return typedAction("user/SET_USER_AVATAR", newAvatar);
};

export { _setUserData, _setUserUid, _setUserAvatar };
