import { types } from "mobx-state-tree";

export const Frame = types
  .model({
    roll1: types.maybeNull(types.number, null),
    roll2: types.maybeNull(types.number, null),
    roll3: types.maybeNull(types.number, null),
    additionalRoll1: types.maybeNull(types.number, null),
    additionalRoll2: types.maybeNull(types.number, null),
    cumulativeScore: types.maybeNull(types.number, null),
  })
  .views((self) => {
    function isStrike() {
      return self.roll1 === 10;
    }
    function isSpare() {
      if (self.roll1 !== null && self.roll2 !== null)
        return self.roll1 + self.roll2 === 10;
      else return false;
    }
    function frameScore() {
      if (
        isStrike() &&
        self.additionalRoll1 !== null &&
        self.additionalRoll2 !== null
      ) {
        return self.roll1 + self.additionalRoll1 + self.additionalRoll2;
      } else if (isSpare() && self.additionalRoll1 !== null) {
        return self.roll1 + self.roll2 + self.additionalRoll1;
      } else if (isStrike() || isSpare()) {
        return null;
      } else if (self.roll1 !== null && self.roll2 !== null) {
        return self.roll1 + self.roll2;
      } else {
        return null;
      }
    }
    function tenthFrameScore() {
      const allowThirdRoll = self.isSpare() || self.isStrike();
      if (self.roll1 === null || self.roll2 === null) {
        return null;
      } else if (allowThirdRoll && self.roll3 === null) {
        return null;
      } else if (allowThirdRoll) {
        return self.roll1 + self.roll2 + self.roll3;
      } else {
        return self.roll1 + self.roll2;
      }
    }
    return { isStrike, frameScore, isSpare, tenthFrameScore };
  })
  .actions((self) => {
    function setRoll1(roll1) {
      self.roll1 = roll1;
    }
    function setRoll2(roll2) {
      self.roll2 = roll2;
    }
    function setRoll3(roll3) {
      self.roll3 = roll3;
    }
    function setAdditionalRoll1(additionalRoll1) {
      self.additionalRoll1 = additionalRoll1;
    }
    function setAdditionalRoll2(additionalRoll2) {
      self.additionalRoll2 = additionalRoll2;
    }
    function setCumulativeScore(cumulativeScore) {
      self.cumulativeScore = cumulativeScore;
    }
    return {
      setRoll1,
      setRoll2,
      setRoll3,
      setAdditionalRoll1,
      setAdditionalRoll2,
      setCumulativeScore,
    };
  });
