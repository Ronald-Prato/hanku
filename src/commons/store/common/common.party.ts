import { Dispatch, AnyAction } from "redux";
import { _setHeaderTab } from "./common.actions";

interface CommonState {
  headerTab: number;
}

const initialState: CommonState = {
  headerTab: 0,
};

const setHeaderTab = (index: number) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(_setHeaderTab(index));
  };
};

type CommonAction = ReturnType<typeof _setHeaderTab>;

const commonReducer = (
  state = initialState,
  action: CommonAction
): CommonState => {
  switch (action.type) {
    case "common/SET_HEADER_TAB":
      return {
        ...state,
        headerTab: action.payload,
      };
    default:
      return state;
  }
};

export { commonReducer, setHeaderTab };
