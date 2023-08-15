const bmi = require("./main");

test("Function returns normalna", () => {
  expect(bmi(1.8, 65)).toBe("Normalna");
});

test("Function returns niedowaga", () => {
  expect(bmi(1.8, 45)).toBe("Niedowaga");
});

test("Function returns nadwaga", () => {
  expect(bmi(1.8, 102)).toBe("Nadwaga");
});

test("Function breaks", () => {
  expect(bmi(true, 102)).toBe("Nadwaga");
});
