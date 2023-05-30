//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (code) => {
  let possibleActions = ["jump", "close your eyes", "double blink", "wink"];
  let actions = [];
  let binaryDigits = code.toString(2).padStart(5, "0").split("");

  for (let i = 1; i < binaryDigits.length; i++) {
    if (binaryDigits[i] === "1") {
      actions.unshift(possibleActions[i - 1]);
    }
  }
  if (binaryDigits[0] === "1") {
    actions = actions.reverse();
  }

  return actions;
};
