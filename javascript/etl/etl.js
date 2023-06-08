//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  let newObj = {};

  for (let score in old) {
    for (let letter of old[score]) {
      newObj[letter.toLowerCase()] = Number(score);
    }
  }

  return newObj;
};
