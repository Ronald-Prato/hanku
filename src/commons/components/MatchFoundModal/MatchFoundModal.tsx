import { FC, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { Theme } from "../../../theme";
import { MatchFoundModalProps } from "./MatchFoundModal.contracts";
import {
  ButtonsSection,
  LoaderContainer,
  MainContainer,
  MainContent,
  Opacity,
} from "./MatchFoundModal.styles";

export const MatchFoundModal: FC<MatchFoundModalProps> = ({
  onAcceptMatch,
  onRejectMatch,
}) => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleRejectTimeout = () => {
    onRejectMatch();
    setHasAccepted(false);
  };

  const handleReject = () => {
    onRejectMatch();
    setHasAccepted(false);
  };

  const handleAccept = () => {
    onAcceptMatch();
    setHasAccepted(true);
  };

  return (
    <MainContainer>
      <Opacity />
      <MainContent>
        {hasAccepted ? (
          <i style={{ width: "60%", textAlign: "center" }}>
            Esperando al otro jugador
          </i>
        ) : (
          <i>¡Partida encontrada!</i>
        )}

        {hasAccepted ? (
          <LoaderContainer>
            <div className="loader">Loading...</div>
          </LoaderContainer>
        ) : (
          <CountdownCircleTimer
            isPlaying
            onComplete={handleRejectTimeout}
            duration={10}
            colors="#fff"
            size={100}
            trailColor={Theme.PALETTE.primaryDark as any}
          >
            {({ remainingTime }) => (
              <span style={{ color: "white" }}>{remainingTime}</span>
            )}
          </CountdownCircleTimer>
        )}

        {!hasAccepted && (
          <ButtonsSection>
            <button className="accept" onClick={handleAccept}>
              Aceptar
            </button>
            <button className="reject" onClick={handleReject}>
              Rechazar
            </button>
          </ButtonsSection>
        )}
      </MainContent>
    </MainContainer>
  );
};
