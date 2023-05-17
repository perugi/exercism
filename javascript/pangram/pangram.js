//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let englishCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  return englishCharacters.every((character) =>
    sentence.toLowerCase().includes(character)
  );
};
