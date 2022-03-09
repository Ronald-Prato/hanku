import { Ranks } from "./commons/contracts/user.contracts";

const MAX_APP_WIDTH = 1920;
const ALERT_SHOW_TIME = 3000;
const PEER_ENV_SECRET = process.env.REACT_APP_PEER_ENV_SECRET;
const NICKNAME_MAX_LENGTH = 15;
const NICKNAME_MIN_LENGTH = 3;
const AVATAR_BASE_URL = "https://avatars.dicebear.com/api/bottts";
const QUEUE_ALARM_DURATION = 4000;
const QUOTE_ROUND_MAX_TIME = 120; //seg

const GENERIC_ROOM_DATA = {
  id: "",
  text: {},
  players: {},
  game: {
    quoteRound: {
      content: "",
      winner: "",
    },
    wordsRound: {
      content: [],
      winner: "",
    },
    charsRound: {
      content: [],
      winner: "",
    },
  },
  currentRound: "quoteRound",
  timestamp: 0,
  seconds: 0,
  winner: "",
  pointsEarned: 0,
  hasClimbed: false,
};

const RANKS_MANAGEMENT = {
  [Ranks.Copper]: {
    minLvl: 0,
    maxLvl: 50,
    points: {
      earnings: { min: 10, max: 12 },
      loses: 6,
    },
  },
  [Ranks.Silver]: {
    minLvl: 51,
    maxLvl: 110,
    points: {
      earnings: { min: 9, max: 11 },
      loses: 6,
    },
  },
  [Ranks.Gold]: {
    minLvl: 111,
    maxLvl: 180,
    points: {
      earnings: { min: 8, max: 10 },
      loses: 5,
    },
  },
  [Ranks.Diamond]: {
    minLvl: 181,
    maxLvl: 270,
    points: {
      earnings: { min: 10, max: 15 },
      loses: 7,
    },
  },
  [Ranks.Master]: {
    minLvl: 271,
    maxLvl: Infinity,
    points: {
      earnings: { min: 14, max: 14 },
      loses: 8,
    },
  },
};

const Entities = {
  User: `${PEER_ENV_SECRET}_USER`,
  Rooms: `${PEER_ENV_SECRET}_ROOMS`,
};

export type SOCKET_STATUS = { status: "ok" | "error" };

export {
  MAX_APP_WIDTH,
  ALERT_SHOW_TIME,
  PEER_ENV_SECRET,
  Entities,
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
  AVATAR_BASE_URL,
  QUEUE_ALARM_DURATION,
  QUOTE_ROUND_MAX_TIME,
  RANKS_MANAGEMENT,
  GENERIC_ROOM_DATA,
};
