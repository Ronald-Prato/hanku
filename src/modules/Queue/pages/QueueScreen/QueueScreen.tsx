import { Socket } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { RootState } from "../../../../commons/store";
import { QueueAlert } from "../../../../commons/components";
import { IconContainer, MainContainer } from "./Queue.styles";
import { setQueueAlert } from "../../../../commons/store/common/common.party";
import { ProfileHudContainer } from "../../containers/ProfileHudContainer/ProfileHudContainer";
import { GetInQueueContainer } from "../../containers/GetInQueueContainer/GetInQueueContainer";
import { MatchRoomData } from "../../../../commons/contracts/matchroom.contracts";

export const QueueScreen: FC<{ socket: Socket }> = ({ socket }) => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [matchFound, setMatchFound] = useState(false);
  const [matchedRoomId, setMatchedRoomId] = useState("");

  const resetMatchFound = () => {
    setMatchedRoomId("");
    setMatchFound(false);
  };

  useEffect(() => {
    const handleBackBehaviour = () => {
      socket.emit("exit-queue", user.uid, () => {});
    };

    // Exit the queue if go back in browser
    window.addEventListener("popstate", handleBackBehaviour);
    return () => window.removeEventListener("popstate", handleBackBehaviour);
  }, []);

  useEffect(() => {
    // Add the user to the array server side
    socket.emit("new-user", user);

    // Match found!
    socket.on("matched", (roomId: string) => {
      setMatchedRoomId(roomId);
      setMatchFound(true);
    });

    socket.on("player-didnt-accept-match", () => {
      dispatch(
        setQueueAlert({
          show: true,
          message: "El otro jugador no aceptó la partida",
        })
      );

      resetMatchFound();
    });

    socket.on("match-starting", (roomData: MatchRoomData) => {
      resetMatchFound();
      navigate("/match", { state: { roomData } });
    });
  }, []);

  const handleGoBack = () => {
    // TODO: Add logic to get off of the queue if youre in
    socket.emit("exit-queue", user.uid, () => {});
    navigate("/home", { replace: true });
    // socket.emit("check-queue");
  };

  const handleExitQueue = () => {
    resetMatchFound();
  };

  const handleRejectMatch = () => {
    socket.emit("reject-match", {
      rank: user.rank,
      uid: user.uid,
      roomId: matchedRoomId,
    });
    resetMatchFound();
  };

  const handleAcceptMatch = () => {
    socket.emit("accept-match", { roomId: matchedRoomId, uid: user.uid });
  };

  return (
    <MainContainer>
      <IconContainer onClick={handleGoBack}>
        <BsFillArrowLeftCircleFill size={35} color="white" />
      </IconContainer>

      <ProfileHudContainer user={user} />

      <GetInQueueContainer
        socket={socket}
        user={user}
        matchFound={matchFound}
        onExitQueue={handleExitQueue}
        onAcceptMatch={handleAcceptMatch}
        onRejectMatch={handleRejectMatch}
      />

      <QueueAlert />
    </MainContainer>
  );
};
