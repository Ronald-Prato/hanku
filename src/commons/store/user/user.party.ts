import { Dispatch, AnyAction } from "redux";
import { Ranks, User } from "../../contracts/user.contracts";
import { _setUserData } from "./user.actions";

const initialState: User = {
  uid: "",
  nickname: "",
  avatar: "",
  lvl: -1,
  lvlPoints: -1,
  rank: "" as Ranks,
};

const setUserData = (userData: User) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(_setUserData(userData));
  };
};

type AuthAction = ReturnType<typeof _setUserData>;

const userReducer = (state = initialState, action: AuthAction): User => {
  switch (action.type) {
    case "user/SET_USER_DATA":
      return state;
    default:
      return state;
  }
};

export { userReducer, setUserData };
