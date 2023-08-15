const fizzBuzz = require("./main");

test("Function returns fizz", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});

test("Function returns buzz", () => {
  expect(fizzBuzz(70)).toBe("Buzz");
});

test("Function returns fizz", () => {
  expect(fizzBuzz(12)).toBe("Fizz");
});

test("Function returns fizzbuzz", () => {
  expect(fizzBuzz(30)).toBe("FizzBuzz");
});

test("Function returns n", () => {
  expect(fizzBuzz(14)).toBe(14);
});
