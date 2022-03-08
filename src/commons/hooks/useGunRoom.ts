import { useSelector } from "react-redux";

import { gun } from "../../gun";
import { RootState } from "../store";
import { Entities } from "../../constants";
import { MatchRoomData, RoundNames } from "../contracts/matchroom.contracts";
import { useEffect, useState } from "react";
import { Ranks, User } from "../contracts/user.contracts";
import { getNewRank } from "../../modules/Match/utils/rankManagementUtils";
import { useGunUser } from "./useGunUser";

export const useGunRoom = (roomData: MatchRoomData) => {
  const user = useSelector((state: RootState) => state.user);
  const [opponentText, setOpponentText] = useState("");
  const [gameWinner, setGameWinner] = useState("");

  const { updateAllUserInfo } = useGunUser();

  useEffect(() => {
    createRoom();
  }, []);

  useEffect(() => {
    // TODO: this is temporary, we should react to every change in game rounds, for now just end the game when quoteRound ends.
    gun.get(`${roomData.id}/data/game/${RoundNames.QuoteRound}`).on((round) => {
      setGameWinner(round.winner);
    });
  }, []);

  useEffect(() => {
    const oponentId = Object.keys(roomData.players).filter(
      (id) => id !== user.uid
    )[0];

    gun
      .get(roomData.id + "/data/text")
      .get(oponentId)
      .on((text) => {
        setOpponentText(text);
      });
  }, []);

  const whatsNextRound = (round: RoundNames): RoundNames | "finish" => {
    if (round === RoundNames.QuoteRound) {
      return RoundNames.WordsRound;
    }
    if (round === RoundNames.WordsRound) {
      return RoundNames.CharsRound;
    }

    return "finish";
  };

  const createRoom = () => {
    const newRoomInstance = gun.get(roomData.id).put({ data: roomData });
    gun.get(Entities.Rooms).set(newRoomInstance);
  };

  const updateRoomPlayerText = (text: string) => {
    gun
      .get(roomData.id)
      .get("data")
      .once((_room) => {
        const noTypeRoom: any = _room;
        const room: MatchRoomData = noTypeRoom;

        const updatedRoom = {
          ...room,
          text: {
            ...room.text,
            [user.uid]: text,
          },
        };

        gun.get(roomData.id).put({ data: updatedRoom });
      });
  };

  const updatePlayerScore = (
    option: "add" | "subtract",
    callback: (newPointsAmount: number) => void
  ) => {
    gun
      .get(user.uid)
      .get("data")
      .once((_user: any) => {
        let newPointsAmmount = 0;
        let newRank: Ranks = user.rank;

        // TODO: Add real points management according to rank and match time.
        if (option === "add") {
          newPointsAmmount = user.lvlPoints + 1;
          newRank = getNewRank(user.rank, newPointsAmmount);
          callback(1);
        }

        if (option === "subtract") {
          newPointsAmmount = user.lvlPoints > 0 ? user.lvlPoints - 1 : 0;
          newRank = getNewRank(user.rank, newPointsAmmount);
          callback(-1);
        }

        const updatedUser: User = {
          ...user,
          lvlPoints: newPointsAmmount,
          rank: newRank,
        };

        updateAllUserInfo(updatedUser);
      });
  };

  const updateRoundWinner = () => {
    const updatedRoom: MatchRoomData = roomData;
    updatedRoom.game[roomData.currentRound].winner = user.uid;
    const nextRound = whatsNextRound(roomData.currentRound);
    updatedRoom.currentRound = nextRound as RoundNames;

    gun.get(roomData.id).put({ data: updatedRoom });
  };

  const checkRoom = (roomId: string) => {
    gun.get(roomId + "/data").once((players) => {
      console.log(players);
    });
  };

  return {
    updateRoomPlayerText,
    opponentText,
    updateRoundWinner,
    gameWinner,
    checkRoom,
    updatePlayerScore,
  };
};
