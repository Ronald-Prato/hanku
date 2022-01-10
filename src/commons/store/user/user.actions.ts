import { User } from "../../contracts/user.contracts";
import { typedAction } from "../helpers";

const _setUserData = (userData: User) => {
  return typedAction("user/SET_USER_DATA", userData);
};

export { _setUserData };
