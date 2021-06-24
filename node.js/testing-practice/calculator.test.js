const { describe, test } = require("@jest/globals");
const { add } = require("./calculator");

describe("string calculator tests", () => {
  test("return sum of two values", () => {
    const functionResult = add("1,2");
    expect(functionResult).toBe(3);
  });
});
