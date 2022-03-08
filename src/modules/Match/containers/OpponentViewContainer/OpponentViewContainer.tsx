import { FC, useEffect } from "react";

import { MainContainer, TextSection } from "./OpponentViewContainer.styles";
import { OpponentViewContainerProps } from "./OpponentViewContainer.contracts";
import { useGunUser } from "../../../../commons/hooks/useGunUser";
import { Avatar } from "../../../../commons/components";

export const OpponentViewContainer: FC<OpponentViewContainerProps> = ({
  opponent,
  opponentText,
}) => {
  return (
    <MainContainer>
      <h3>Oponente</h3>
      <Avatar showControllers={false} user={opponent}></Avatar>

      <TextSection>
        <h4>Escribiendo: </h4>
        <span>{opponentText}</span>
      </TextSection>
    </MainContainer>
  );
};
