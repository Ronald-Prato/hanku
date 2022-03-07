import { Dispatch, AnyAction } from "redux";
import { QueueAlertProps } from "../../contracts/common.contracts";
import { _setHeaderTab, _setQueueAlert } from "./common.actions";

interface CommonState {
  headerTab: number;
  queueAlert: QueueAlertProps;
}

const initialState: CommonState = {
  headerTab: 0,
  queueAlert: {
    show: false,
    message: "",
  },
};

const setHeaderTab = (index: number) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(_setHeaderTab(index));
  };
};

const setQueueAlert = (alarmProps: QueueAlertProps) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(_setQueueAlert(alarmProps));
  };
};

type CommonAction = ReturnType<typeof _setHeaderTab | typeof _setQueueAlert>;

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
    case "common/SET_QUEUE_ALERT":
      return {
        ...state,
        queueAlert: action.payload,
      };
    default:
      return state;
  }
};

export { commonReducer, setHeaderTab, setQueueAlert };
