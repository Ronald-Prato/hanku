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
  customMessage,
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
            {customMessage && (
              <span style={{ fontFamily: "Roboto" }}>{customMessage}</span>
            )}
            <span>¡Sigue sumando puntos para subir de liga!</span>
          </FeedbackSection>
        ) : (
          <FeedbackSection>
            <i>Has Perdido</i>
            {customMessage && (
              <span style={{ fontFamily: "Roboto" }}>{customMessage}</span>
            )}
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
            Volver a la cola
          </button>
        </ButtonsSection>
      </MainContent>
    </MainContainer>
  );
};
