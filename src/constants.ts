const MAX_APP_WIDTH = 1920;
const ALERT_SHOW_TIME = 3000;
const PEER_ENV_SECRET = process.env.REACT_APP_PEER_ENV_SECRET;
const NICKNAME_MAX_LENGTH = 15;
const NICKNAME_MIN_LENGTH = 3;
const AVATAR_BASE_URL = "https://avatars.dicebear.com/api/bottts";
const QUEUE_ALARM_DURATION = 4000;

const Entities = {
  User: `${PEER_ENV_SECRET}_USER`,
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
};
