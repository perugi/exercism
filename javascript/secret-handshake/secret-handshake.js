//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (code) => {
  let actions = [];
  let binaryDigits = code.toString(2).padStart(5, "0").split("");
  console.log(binaryDigits);

  for (let i = binaryDigits.length - 1; i >= 0; i--) {
    if (binaryDigits[i] === "1") {
      if (i === 4) actions.push("wink");
      else if (i === 3) actions.push("double blink");
      else if (i === 2) actions.push("close your eyes");
      else if (i === 1) actions.push("jump");
      else if (i === 0) actions = actions.reverse();
    }
  }

  return actions;
};
