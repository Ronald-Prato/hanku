export enum Ranks {
  Copper = "copper",
  Silver = "silver",
  Gold = "gold",
  Diamond = "diamond",
  Master = "master",
}

export interface User {
  uid: string;
  nickname: string;
  avatar: string;
  lvl: number;
  lvlPoints: number;
  rank: Ranks;
}
