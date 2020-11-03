import { Frame } from "./Frame";

it("all rolls are null after create", () => {
  const currentFrame = Frame.create();
  expect(currentFrame.roll1).toBe(null);
  expect(currentFrame.roll2).toBe(null);
  expect(currentFrame.roll3).toBe(null);
});

it("can calculate if the frame is a spare", () => {
  const currentFrame = Frame.create();
  expect(currentFrame.isSpare()).toBe(false);
  currentFrame.setRoll1(10);
  expect(currentFrame.isSpare()).toBe(false);
  currentFrame.setRoll1(4);
  expect(currentFrame.isSpare()).toBe(false);
  currentFrame.setRoll2(5);
  expect(currentFrame.isSpare()).toBe(false);
  currentFrame.setRoll1(5);
  expect(currentFrame.isSpare()).toBe(true);
});

it("can calculate if the frame is a strike", () => {
  const currentFrame = Frame.create();
  expect(currentFrame.isStrike()).toBe(false);
  currentFrame.setRoll1(6);
  expect(currentFrame.isStrike()).toBe(false);
  currentFrame.setRoll2(4);
  expect(currentFrame.isStrike()).toBe(false);
  currentFrame.setRoll1(10);
  expect(currentFrame.isStrike()).toBe(true);
});

it("can calculate the frame score", () => {
  const currentFrame = Frame.create();
  expect(currentFrame.frameScore()).toBe(null);
  currentFrame.setRoll1(10);
  expect(currentFrame.frameScore()).toBe(null);
  currentFrame.setAdditionalRoll1(4);
  expect(currentFrame.frameScore()).toBe(null);
  currentFrame.setAdditionalRoll2(5);
  expect(currentFrame.frameScore()).toBe(19);
  currentFrame.setRoll1(6);
  currentFrame.setAdditionalRoll1(null);
  currentFrame.setAdditionalRoll2(null);
  expect(currentFrame.frameScore()).toBe(null);
  currentFrame.setRoll2(4);
  expect(currentFrame.frameScore()).toBe(null);
  currentFrame.setAdditionalRoll1(4);
  currentFrame.setAdditionalRoll2(5);
  expect(currentFrame.frameScore()).toBe(14);
  currentFrame.setRoll1(6);
  currentFrame.setRoll2(2);
  expect(currentFrame.frameScore()).toBe(8);
});
