import { Ranks } from "../../../commons/contracts/user.contracts";
import { RANKS_MANAGEMENT } from "../../../constants";

export const getNewRank = (currentRank: Ranks, newPointsAmmount: number) => {
  const comparisonMap: { [key: string]: () => Ranks } = {
    [Ranks.Copper]: () => {
      if (newPointsAmmount > RANKS_MANAGEMENT.copper.maxLvl)
        return Ranks.Silver;

      return Ranks.Copper;
    },

    [Ranks.Silver]: () => {
      if (newPointsAmmount > RANKS_MANAGEMENT.silver.maxLvl) return Ranks.Gold;
      if (newPointsAmmount < RANKS_MANAGEMENT.silver.minLvl)
        return Ranks.Copper;

      return Ranks.Silver;
    },

    [Ranks.Gold]: () => {
      if (newPointsAmmount > RANKS_MANAGEMENT.gold.maxLvl) return Ranks.Diamond;
      if (newPointsAmmount < RANKS_MANAGEMENT.gold.minLvl) return Ranks.Silver;

      return Ranks.Gold;
    },

    [Ranks.Diamond]: () => {
      if (newPointsAmmount > RANKS_MANAGEMENT.diamond.maxLvl)
        return Ranks.Master;
      if (newPointsAmmount < RANKS_MANAGEMENT.diamond.minLvl) return Ranks.Gold;

      return Ranks.Diamond;
    },

    [Ranks.Copper]: () => {
      if (newPointsAmmount < RANKS_MANAGEMENT.master.minLvl)
        return Ranks.Diamond;

      return Ranks.Master;
    },
  };

  return comparisonMap[currentRank]();
};
