import { Dispatch, AnyAction } from "redux";
import { Ranks, User } from "../../contracts/user.contracts";
import { _setUserData, _setUserUid } from "./user.actions";

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

const setUserUid = (uid: string) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(_setUserUid(uid));
  };
};

type AuthAction = ReturnType<typeof _setUserData | typeof _setUserUid>;

const userReducer = (state = initialState, action: AuthAction): User => {
  switch (action.type) {
    case "user/SET_USER_DATA":
      return action.payload;
    case "user/SET_USER_UID":
      return {
        ...state,
        uid: action.payload,
      };
    default:
      return state;
  }
};

export { userReducer, setUserData, setUserUid };
