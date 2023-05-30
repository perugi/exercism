// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (input) => {
  if (!input.startsWith("What is")) throw new Error("Unknown operation");

  let validRegex =
    // /^What is (?:-?\d+)(?: (plus|minus|multiplied by|divided by) (?:-?\d+))*\?$/;
    /^What is (?:-?\d+)(?: (plus|minus|multiplied by|divided by) (?:-?\d+))*\?$/;
  if (validRegex.exec(input) === null) {
    throw new Error("Syntax error");
  }

  let baseRegex = /^What is (-?\d+).*?/;
  let operationsRegex = /(?:(plus|minus|multiplied by|divided by) (-?\d+))+/g;

  let calculation = Number(baseRegex.exec(input)[1]);
  const operations = input.matchAll(operationsRegex);

  for (let operation of operations) {
    if (operation[1] === "plus") calculation += Number(operation[2]);
    if (operation[1] === "minus") calculation -= Number(operation[2]);
    if (operation[1] === "multiplied by") calculation *= Number(operation[2]);
    if (operation[1] === "divided by") calculation /= Number(operation[2]);
  }

  return calculation;
};
