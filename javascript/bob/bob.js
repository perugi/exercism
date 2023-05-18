//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();

  if (isShouting(message) && isQuestion(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (isQuestion(message)) {
    return "Sure.";
  } else if (isShouting(message)) {
    return "Whoa, chill out!";
  } else if (isBlank(message)) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};

function isShouting(message) {
  const shoutingRegex = /^(?:[^a-z]*[A-Z])+[^a-z]*$/;

  return shoutingRegex.test(message);
}

function isQuestion(message) {
  return message[message.length - 1] === "?";
}

function isBlank(message) {
  const whitespaceRegex = /^\s*$/;

  return whitespaceRegex.test(message);
}
