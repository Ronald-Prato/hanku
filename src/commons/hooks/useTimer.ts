import { useCallback, useState } from "react";

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const startTimer = useCallback(() => {
    let secondsCount = seconds;
    let minutesCount = minutes;
    setInterval(() => {
      if (secondsCount === 59) {
        minutesCount++;
        setMinutes(minutesCount);

        secondsCount = 0;
        setSeconds(secondsCount);
        return;
      }

      secondsCount++;
      setSeconds(secondsCount);
    }, 1000);
  }, []);

  const getFormatedTime = (time: number) => {
    if (time < 10) {
      return `0${time}`;
    }

    return `${time}`;
  };

  return {
    startTimer,
    seconds: getFormatedTime(seconds),
    minutes: getFormatedTime(minutes),
  };
};
