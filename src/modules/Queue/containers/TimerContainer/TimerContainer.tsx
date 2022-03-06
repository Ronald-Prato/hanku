import { FC, useEffect } from "react";
import { useTimer } from "../../../../commons/hooks/useTimer";

import { MainContainer } from "./TimerContainer.styles";

export const TimerContainer: FC = () => {
  const { seconds, minutes, startTimer } = useTimer();

  useEffect(() => {
    setTimeout(() => {
      startTimer();
    }, 500);
  }, []);

  return (
    <MainContainer>
      <span>
        {minutes}:{seconds}
      </span>
    </MainContainer>
  );
};
