const sum = require("./main");

test("Testing sum for 2+2", () => {
  expect(sum(2, 2)).toBe(4);
});
