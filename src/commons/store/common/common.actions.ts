import { QueueAlertProps } from "../../contracts/common.contracts";
import { typedAction } from "../helpers";

const _setHeaderTab = (index: number) => {
  return typedAction("common/SET_HEADER_TAB", index);
};

const _setQueueAlert = (alarmProps: QueueAlertProps) => {
  return typedAction("common/SET_QUEUE_ALERT", alarmProps);
};

export { _setHeaderTab, _setQueueAlert };
