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
import { GENERIC_ROOM_DATA, QUOTE_ROUND_MAX_TIME } from "../../../../constants";
import { Socket } from "socket.io-client";
import { useGunUser } from "../../../../commons/hooks/useGunUser";
import { User } from "../../../../commons/contracts/user.contracts";

export const MatchScreen: FC<{ socket: Socket }> = ({ socket }) => {
  const user = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();
  const { state } = useLocation();
  const { roomData }: any = state || {
    roomData: GENERIC_ROOM_DATA,
  };

  const {
    updateRoomPlayerText,
    opponentText,
    updateRoundWinner,
    gameWinner,
    setPlayerDisconnection,
  } = useGunRoom(roomData);
  const { updatePlayerScore, getCustomUser } = useGunUser();

  const opponentId = Object.keys(roomData.players).filter(
    (id) => id !== user.uid
  )[0];
  const [opponentUser, setOpponentUser] = useState<User>({} as User);
  const phrase = roomData.game["quoteRound"].content;

  const [writtenText, setWrittenText] = useState("");
  const [matchPoints, setMatchPoints] = useState(0);
  const [disconnectedPlayer, setDisconnectionPlayer] = useState("");

  useEffect(() => {
    if (!state) {
      navigate("/home", { replace: true, state: {} });
    }
  }, []);

  useEffect(() => {
    // Get opponent user form peer network
    getCustomUser(opponentId, (user) => {
      if (user) setOpponentUser(user);
    });
  });

  const updatePoints = (option: "add" | "subtract", customId?: string) => {
    updatePlayerScore({
      option,
      customId,
      callback: (points) => {
        setMatchPoints(points);
      },
    });
  };

  useEffect(() => {
    socket.on("user-has-diconnected", (disconnectedUserId: string) => {
      setPlayerDisconnection(disconnectedUserId);
      setDisconnectionPlayer(disconnectedUserId);

      if (user.uid !== disconnectedUserId) {
        updatePoints("add", user.uid);
      } else {
        updatePoints("subtract", disconnectedUserId);
      }
    });
  }, []);

  useEffect(() => {
    // Exit the queue if go back in browser
    window.history.pushState(null, document.title, window.location.href);

    const handleBackBehaviour = () => {
      window.history.pushState(null, document.title, window.location.href);
    };

    window.addEventListener("popstate", handleBackBehaviour);
    window.addEventListener("beforeunload", () => {
      navigate("/home", { replace: true });
    });

    // return () => {
    //   window.removeEventListener("popstate", handleBackBehaviour);
    // };
  }, []);

  useEffect(() => {
    if (!gameWinner.length) return;

    // If current player won the game, add some rps to it. otherwise subtract rps.
    if (gameWinner === user.uid) {
      updatePoints("add");
    } else {
      updatePoints("subtract");
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
    navigate("/queue", { replace: true, state: {} });
  };

  return state ? (
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
          opponent={opponentUser}
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

      {disconnectedPlayer.length > 0 && (
        <GameResultModal
          customMessage={`${opponentUser.nickname} se ha desconectado`}
          onAccept={handleAcceptResult}
          hasWon={disconnectedPlayer !== user.uid}
          pointsEarned={matchPoints}
        />
      )}
    </MainContainer>
  ) : (
    <></>
  );
};
