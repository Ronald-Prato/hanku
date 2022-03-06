import { FC, useState } from "react";

import {
  MainContainer,
  ButtonContainer,
  QueueLoaderContainer,
} from "./GetInQueueContainer.styles";
import { TimerContainer } from "../TimerContainer/TimerContainer";

export const GetInQueueContainer: FC = () => {
  const [isInQueue, setIsInQueue] = useState(false);

  const handleGetInQueue = () => {
    setIsInQueue(true);
  };

  const handleGetOffOfQueue = () => {
    setIsInQueue(false);
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
    </MainContainer>
  );
};
