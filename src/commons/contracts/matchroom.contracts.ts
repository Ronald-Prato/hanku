export enum RoundNames {
  QuoteRound = "quoteRound",
  WordsRound = "wordsRound",
  CharsRound = "charsRound",
}

export interface MatchRoomData {
  id: string;
  text: {};
  players: {};
  disconnectedPlayer: string;
  game: {
    [RoundNames.QuoteRound]: {
      content: string;
      winner: string;
    };
    [RoundNames.WordsRound]: {
      content: string;
      winner: string;
    };
    [RoundNames.CharsRound]: {
      content: string;
      winner: string;
    };
  };
  currentRound: RoundNames;
  timestamp: number;
  seconds: number;
  winner: string;
  pointsEarned: number;
  hasClimbed: boolean;
}
