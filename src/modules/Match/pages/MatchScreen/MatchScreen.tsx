/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { Theme } from "../../../../theme";
import { GameResultModal, MatchInput } from "../../../../commons/components";
import {
  Content,
  MainContainer,
  OpponentPlayer,
  SelfPlayer,
} from "./MatchScreen.styles";
import { PhraseContainer } from "../../containers/PhraseContainer/PhraseContainer";
import { useGunRoom } from "../../../../commons/hooks/useGunRoom";
import { OpponentViewContainer } from "../../containers/OpponentViewContainer/OpponentViewContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../../../commons/store";
import { QUOTE_ROUND_MAX_TIME } from "../../../../constants";

export const MatchScreen: FC = () => {
  const user = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();
  const { state } = useLocation();
  const { roomData }: any = state;

  const {
    updateRoomPlayerText,
    opponentText,
    updateRoundWinner,
    gameWinner,
    updatePlayerScore,
  } = useGunRoom(roomData);

  const oponentId = Object.keys(roomData.players).filter(
    (id) => id !== user.uid
  )[0];
  const phrase = roomData.game["quoteRound"].content;

  const [writtenText, setWrittenText] = useState("");
  const [matchPoints, setMatchPoints] = useState(0);

  useEffect(() => {
    if (!gameWinner.length) return;

    // If current player won the game, add some rps to it. otherwise subtract rps.
    if (gameWinner === user.uid) {
      updatePlayerScore("add", (points) => {
        setMatchPoints(points);
      });
    } else {
      updatePlayerScore("subtract", (points) => {
        setMatchPoints(points);
      });
    }
  }, [gameWinner]);

  useEffect(() => {
    // Check if you finished
    // TODO: add next round logic
    if (writtenText === phrase) {
      updateRoundWinner();
    }
  }, [writtenText]);

  const handleRoundFinished = () => {
    // alert("round terminado");
  };

  const handleChangeText = (value: string) => {
    updateRoomPlayerText(value);
    setWrittenText(value);
  };

  const handleAcceptResult = () => {
    navigate("/home");
  };

  return (
    <MainContainer>
      <SelfPlayer>
        <Content>
          <CountdownCircleTimer
            isPlaying
            onComplete={handleRoundFinished}
            duration={QUOTE_ROUND_MAX_TIME}
            colors={Theme.PALETTE.primary as any}
            trailColor={Theme.PALETTE.primaryDark as any}
          >
            {({ remainingTime }) => (
              <span style={{ color: "white" }}>{remainingTime}</span>
            )}
          </CountdownCircleTimer>

          <PhraseContainer phrase={phrase} writtenText={writtenText} />

          <MatchInput
            isDisabled={gameWinner.length > 0}
            onChangeText={handleChangeText}
            onCheat={() => {}}
          />
        </Content>
      </SelfPlayer>

      <OpponentPlayer>
        <OpponentViewContainer
          opponentId={oponentId}
          opponentText={opponentText}
        />
      </OpponentPlayer>

      {gameWinner.length > 0 && (
        <GameResultModal
          onAccept={handleAcceptResult}
          hasWon={gameWinner === user.uid}
          pointsEarned={matchPoints}
        />
      )}
    </MainContainer>
  );
};
