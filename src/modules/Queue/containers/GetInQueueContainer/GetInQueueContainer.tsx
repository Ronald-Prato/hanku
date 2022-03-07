import { FC, useEffect, useState } from "react";

import {
  MainContainer,
  ButtonContainer,
  QueueLoaderContainer,
} from "./GetInQueueContainer.styles";
import { SOCKET_STATUS } from "../../../../constants";
import { MatchFoundModal } from "../../../../commons/components";
import { TimerContainer } from "../TimerContainer/TimerContainer";
import { GetInQueueContainerProps } from "./GetInQueueContainer.contracts";

export const GetInQueueContainer: FC<GetInQueueContainerProps> = ({
  user,
  socket,
  onExitQueue,
  matchFound,
  onAcceptMatch,
  onRejectMatch,
}) => {
  const [isInQueue, setIsInQueue] = useState(false);

  const handleGetInQueue = () => {
    socket.emit("get-in-queue", user.uid, (callback: SOCKET_STATUS) => {
      callback.status === "ok" && setIsInQueue(true);
    });
  };

  const handleGetOffOfQueue = () => {
    socket.emit("exit-queue", user.uid, (callback: SOCKET_STATUS) => {
      if (callback.status === "ok") {
        setIsInQueue(false);
        onExitQueue();
      }
    });
  };

  const handleReject = () => {
    onRejectMatch();
    setIsInQueue(false);
  };

  const handleAccept = () => {
    onAcceptMatch();
  };

  return (
    <MainContainer>
      {!isInQueue ? (
        <ButtonContainer onClick={handleGetInQueue}>
          <span>Entrar en cola</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </ButtonContainer>
      ) : (
        <QueueLoaderContainer>
          <div className="circle-shape" />
          <div className="square-shape" />

          <span>En cola</span>

          <button onClick={handleGetOffOfQueue}>Salir</button>
        </QueueLoaderContainer>
      )}

      {isInQueue && <TimerContainer />}

      {matchFound && (
        <MatchFoundModal
          onAcceptMatch={handleAccept}
          onRejectMatch={handleReject}
        />
      )}
    </MainContainer>
  );
};
