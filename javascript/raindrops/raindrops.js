//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let sound = "";

  if (number % 3 === 0) {
    sound += "Pling";
  }
  if (number % 5 === 0) {
    sound += "Plang";
  }
  if (number % 7 === 0) {
    sound += "Plong";
  }

  if (sound === "") {
    return number.toString();
  }

  return sound;
};
