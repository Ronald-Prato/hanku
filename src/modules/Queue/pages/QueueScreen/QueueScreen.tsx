import { FC } from "react";
import { useSelector } from "react-redux";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { RootState } from "../../../../commons/store";
import { IconContainer, MainContainer } from "./Queue.styles";
import { ProfileHudContainer } from "../../containers/ProfileHudContainer/ProfileHudContainer";
import { GetInQueueContainer } from "../../containers/GetInQueueContainer/GetInQueueContainer";
import { useNavigate } from "react-router-dom";

export const QueueScreen: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleGoBack = () => {
    // TODO: Add logic to get off of the queue if youre in
    navigate("/home");
  };

  return (
    <MainContainer>
      <IconContainer onClick={handleGoBack}>
        <BsFillArrowLeftCircleFill size={35} color="white" />
      </IconContainer>

      <ProfileHudContainer user={user} />

      <GetInQueueContainer />
    </MainContainer>
  );
};
