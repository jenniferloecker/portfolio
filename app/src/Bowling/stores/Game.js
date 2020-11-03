import { types } from "mobx-state-tree";
import { Frame } from "./Frame";

export const Game = types
  .model({
    frames: types.optional(types.map(Frame), {
      0: Frame.create(),
      1: Frame.create(),
      2: Frame.create(),
      3: Frame.create(),
      4: Frame.create(),
      5: Frame.create(),
      6: Frame.create(),
      7: Frame.create(),
      8: Frame.create(),
      9: Frame.create(),
    }),
    runningScore: types.maybeNull(types.number, null),
  })
  .views((self) => {
    function currentFrame() {
      const allFrames = Array.from(self.frames.values());
      for (var i = 0; i < allFrames.length; i++) {
        const frame = allFrames[i];
        if (frame.roll1 !== null && frame.roll2 !== null && i !== 9) {
          continue;
        }
        if (frame.roll1 == null) {
          return i;
        }
        if (frame.roll1 === 10 && i !== 9) {
          continue;
        }
        if (frame.roll2 === null) {
          return i;
        }
        if (
          (i === 9) & (frame.roll3 == null) &&
          (frame.isStrike() || frame.isSpare)
        ) {
          return i;
        }
      }
    }
    function nextRollMax() {
      const currentFrameNumber = self.currentFrame();
      const currentFrame = self.frames.get(currentFrameNumber);
      if (currentFrame.roll1 !== null && currentFrame.roll1 < 10) {
        return 10 - currentFrame.roll1;
      } else {
        return 10;
      }
    }
    function calculateGameScores() {
      self.setRunningScore(0);
      const allFrames = Array.from(self.frames.values());
      for (var i = 0; i < allFrames.length; i++) {
        let frameScore = 0;
        if (i === 9) {
          frameScore = allFrames[i].tenthFrameScore();
        } else {
          frameScore = allFrames[i].frameScore();
        }
        if (frameScore !== null) {
          self.setRunningScore(self.runningScore + frameScore);
          allFrames[i].setCumulativeScore(self.runningScore);
        }
      }
    }
    function isGameOver() {
      const frame10 = self.frames.get(9);
      return frame10.tenthFrameScore() !== null;
    }
    function finalScore() {
      const frame10 = self.frames.get(9);
      return frame10.cumulativeScore;
    }
    return {
      calculateGameScores,
      currentFrame,
      nextRollMax,
      isGameOver,
      finalScore,
    };
  })
  .actions((self) => {
    function addNewScore(score) {
      let currentFrameNumber = self.currentFrame();
      let frameToAddTo = self.frames.get(currentFrameNumber);
      if (frameToAddTo.roll1 === null) {
        frameToAddTo.setRoll1(score);
      } else if (frameToAddTo.roll2 === null) {
        frameToAddTo.setRoll2(score);
      } else if (
        currentFrameNumber === 9 &&
        (frameToAddTo.isStrike() || frameToAddTo.isSpare)
      ) {
        frameToAddTo.setRoll3(score);
      }
      addToPreviousFrames(currentFrameNumber, score);
      self.calculateGameScores();
    }
    function addToPreviousFrames(currentFrameNumber, score) {
      if (currentFrameNumber === 0) return;
      let previousFrame = null;
      let penultimateFrame = null;
      if (currentFrameNumber === 1) {
        previousFrame = self.frames.get(0);
      } else {
        previousFrame = self.frames.get(currentFrameNumber - 1);
        penultimateFrame = self.frames.get(currentFrameNumber - 2);
      }
      if (previousFrame.additionalRoll1 === null) {
        previousFrame.setAdditionalRoll1(score);
      } else if (previousFrame.additionalRoll2 === null) {
        previousFrame.setAdditionalRoll2(score);
      }

      if (penultimateFrame !== null) {
        if (penultimateFrame.additionalRoll1 === null) {
          penultimateFrame.setAdditionalRoll1(score);
        } else if (penultimateFrame.additionalRoll2 === null) {
          penultimateFrame.setAdditionalRoll2(score);
        }
      }
    }
    function setFrames(frames) {
      self.frames = frames;
    }
    function setFrame(newFrame, position) {
      self.frames.set(position, newFrame);
    }
    function setRunningScore(runningScore) {
      self.runningScore = runningScore;
    }
    return { addNewScore, setFrames, setRunningScore, setFrame };
  });
