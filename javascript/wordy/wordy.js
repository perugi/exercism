//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (input) => {
  let questionRegex =
    /^What is (d+)(( plus | minus | multiplied by | divided by )(d+))*?$/;

  const matches = input.match(questionRegex);

  console.log(matches);
};
