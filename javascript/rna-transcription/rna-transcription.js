//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  return dna.replace(/[CGAT]/g, (char) => RNA_TO_DNA[char]);
};

const RNA_TO_DNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};
