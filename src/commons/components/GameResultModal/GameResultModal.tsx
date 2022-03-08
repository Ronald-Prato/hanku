import { FC } from "react";

import { GameResultModalProps } from "./GameResultModal.contracts";
import {
  ButtonsSection,
  FeedbackSection,
  MainContainer,
  MainContent,
  Opacity,
  Points,
} from "./GameResultModal.styles";

export const GameResultModal: FC<GameResultModalProps> = ({
  onAccept,
  hasWon,
  pointsEarned,
}) => {
  const handleAccept = () => {
    onAccept();
  };

  return (
    <MainContainer>
      <Opacity />
      <MainContent hasWon={hasWon}>
        {hasWon ? (
          <FeedbackSection>
            <i>¡Has Ganado!</i>
            <span>¡Sigue sumando puntos para subir de liga!</span>
          </FeedbackSection>
        ) : (
          <FeedbackSection>
            <i>Has Perdido</i>
            <span>Mejor suerte para la próxima</span>
          </FeedbackSection>
        )}

        {pointsEarned === 0 ? (
          <Points>No puedes tener menos de 0 puntos</Points>
        ) : (
          <Points>{`${hasWon ? "+" : ""} ${pointsEarned} RPs`}</Points>
        )}

        <ButtonsSection>
          <button className="accept" onClick={handleAccept}>
            Aceptar
          </button>
        </ButtonsSection>
      </MainContent>
    </MainContainer>
  );
};
