import { combineReducers } from "redux";

import { commonReducer } from "./common/common.party";
import { userReducer } from "./user/user.party";

export const rootReducer = combineReducers({
  common: commonReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
