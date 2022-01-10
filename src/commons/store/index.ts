import { combineReducers } from "redux";

import { userReducer } from "./user/user.party";

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
