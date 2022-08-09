const { default: TestRunner } = require("jest-runner");

const testFunction = require("./testFunction");

test("returns addition of two numbers", () => {
  expect(testFunction(5, 5)).toBe(10);
});
