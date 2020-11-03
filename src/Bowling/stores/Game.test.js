import { Game } from "./Game";
import { startingFrames } from "./StartingFrames";
import { fullGame } from "./FullGame";
import { almostFullGame } from "./AlmostFullGame";

const currentGame = Game.create();

it("it can return the current frame", () => {
  expect(currentGame.currentFrame()).toBe(0);
  currentGame.setFrame({ roll1: 5 }, 0);
  expect(currentGame.currentFrame()).toBe(0);
  currentGame.setFrame({ roll1: 5, roll2: 4 }, 0);
  currentGame.setFrame({ roll1: null }, 1);
  expect(currentGame.currentFrame()).toBe(1);
  currentGame.setFrame({ roll1: 10 }, 1);
  expect(currentGame.currentFrame()).toBe(2);
  currentGame.setFrame({ roll1: 0 }, 2);
  expect(currentGame.currentFrame()).toBe(2);
  currentGame.setFrame({ roll1: 0, roll2: 6 }, 2);
  expect(currentGame.currentFrame()).toBe(3);
});

it("it can add a new score", () => {
  currentGame.setFrames(startingFrames);
  currentGame.addNewScore(5);
  expect(currentGame.frames.get(0).roll1).toBe(5);
  currentGame.addNewScore(4);
  expect(currentGame.frames.get(0).roll2).toBe(4);
  currentGame.addNewScore(10);
  expect(currentGame.frames.get(1).roll1).toBe(10);
  expect(currentGame.frames.get(1).roll2).toBe(null);
  currentGame.addNewScore(0);
  expect(currentGame.frames.get(2).roll1).toBe(0);
  currentGame.addNewScore(6);
  expect(currentGame.frames.get(2).roll2).toBe(6);
  currentGame.addNewScore(0);
  expect(currentGame.frames.get(3).roll1).toBe(0);
  currentGame.addNewScore(0);
  expect(currentGame.frames.get(3).roll2).toBe(0);
  currentGame.addNewScore(9);
  expect(currentGame.frames.get(4).roll1).toBe(9);
  currentGame.addNewScore(1);
  expect(currentGame.frames.get(4).roll2).toBe(1);
});

it("it can add additional rolls to previous frames", () => {
  currentGame.setFrames(startingFrames);
  currentGame.addNewScore(7);
  currentGame.addNewScore(3);
  currentGame.addNewScore(4);
  expect(currentGame.frames.get(0).additionalRoll1).toBe(4);
  currentGame.addNewScore(5);
  expect(currentGame.frames.get(0).additionalRoll2).toBe(5);

  currentGame.addNewScore(10);
  expect(currentGame.frames.get(0).additionalRoll1).toBe(4);
  expect(currentGame.frames.get(0).additionalRoll2).toBe(5);
  expect(currentGame.frames.get(1).additionalRoll1).toBe(10);

  currentGame.addNewScore(10);
  expect(currentGame.frames.get(0).additionalRoll1).toBe(4);
  expect(currentGame.frames.get(0).additionalRoll2).toBe(5);
  expect(currentGame.frames.get(1).additionalRoll1).toBe(10);
  expect(currentGame.frames.get(1).additionalRoll2).toBe(10);
  expect(currentGame.frames.get(2).additionalRoll1).toBe(10);

  currentGame.addNewScore(1);
  expect(currentGame.frames.get(0).additionalRoll1).toBe(4);
  expect(currentGame.frames.get(0).additionalRoll2).toBe(5);
  expect(currentGame.frames.get(1).additionalRoll1).toBe(10);
  expect(currentGame.frames.get(1).additionalRoll2).toBe(10);
  expect(currentGame.frames.get(2).additionalRoll1).toBe(10);
  expect(currentGame.frames.get(2).additionalRoll2).toBe(1);
  expect(currentGame.frames.get(3).additionalRoll1).toBe(1);

  currentGame.addNewScore(2);
  expect(currentGame.frames.get(0).additionalRoll1).toBe(4);
  expect(currentGame.frames.get(0).additionalRoll2).toBe(5);
  expect(currentGame.frames.get(1).additionalRoll1).toBe(10);
  expect(currentGame.frames.get(1).additionalRoll2).toBe(10);
  expect(currentGame.frames.get(2).additionalRoll1).toBe(10);
  expect(currentGame.frames.get(2).additionalRoll2).toBe(1);
  expect(currentGame.frames.get(3).additionalRoll1).toBe(1);
  expect(currentGame.frames.get(3).additionalRoll2).toBe(2);
});

it("it can calculate max score of the next roll", () => {
  currentGame.setFrames(startingFrames);
  currentGame.frames.get(0).setRoll1(5);
  expect(currentGame.nextRollMax()).toBe(5);
  currentGame.frames.get(0).setRoll2(5);
  expect(currentGame.nextRollMax()).toBe(10);
  currentGame.frames.get(1).setRoll1(10);
  expect(currentGame.nextRollMax()).toBe(10);
});

it("it can calculate if the game is over", () => {
  currentGame.setFrames(startingFrames);
  expect(currentGame.isGameOver()).toBe(false);
  currentGame.setFrames(fullGame);
  expect(currentGame.isGameOver()).toBe(true);
  currentGame.setFrames(almostFullGame);
  expect(currentGame.isGameOver()).toBe(false);
});
