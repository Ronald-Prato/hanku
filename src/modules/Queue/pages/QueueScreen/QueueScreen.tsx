import { FC } from "react";
import { useSelector } from "react-redux";

import { MainContainer } from "./Queue.styles";
import { RootState } from "../../../../commons/store";
import { ProfileHudContainer } from "../../containers/ProfileHudContainer/ProfileHudContainer";
import { GetInQueueContainer } from "../../containers/GetInQueueContainer/GetInQueueContainer";

export const QueueScreen: FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <MainContainer>
      <ProfileHudContainer user={user} />

      <GetInQueueContainer></GetInQueueContainer>
    </MainContainer>
  );
};
