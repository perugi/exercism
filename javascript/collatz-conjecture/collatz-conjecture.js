//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if (number < 1 || !Number.isInteger(number))
    throw new Error("Only positive numbers are allowed");

  let steps = 0;

  while (number != 1) {
    steps++;
    if (number % 2) {
      number = number * 3 + 1;
    } else {
      number = number / 2;
    }
  }

  return steps;
};
