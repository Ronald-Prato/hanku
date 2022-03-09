import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QUEUE_ALARM_DURATION } from "../../../constants";
import { RootState } from "../../store";
import { setQueueAlert } from "../../store/common/common.party";

import { AlertContent, MainContainer } from "./QueueAlert.styles";

export const QueueAlert: FC = () => {
  const alarmState = useSelector((state: RootState) => state.common.queueAlert);
  const dispatch = useDispatch();

  const hideSelf = () => {
    dispatch(setQueueAlert({ show: false, message: "" }));
  };

  useEffect(() => {
    if (!alarmState.show) return;

    setTimeout(() => {
      hideSelf();
    }, QUEUE_ALARM_DURATION);
  }, [alarmState]);

  return (
    <MainContainer>
      {alarmState.show && (
        <AlertContent onClick={hideSelf}>{alarmState.message}</AlertContent>
      )}
    </MainContainer>
  );
};
