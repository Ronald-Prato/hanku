import { FC, useEffect, useState } from "react";
import { ALERT_SHOW_TIME } from "../../../constants";
import { AlertProps } from "./Alert.contracts";
import { AlertMessage, MainContainer } from "./Alert.style";

export const Alert: FC<AlertProps> = ({
  message,
  severity = "normal",
  onClosed,
}) => {
  const [localShow, setLocalShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLocalShow(false);
      onClosed && onClosed();
    }, ALERT_SHOW_TIME * 1.5);
  }, []);

  return localShow ? (
    <MainContainer severity={severity}>
      <AlertMessage severity={severity}>{message}</AlertMessage>
    </MainContainer>
  ) : null;
};
