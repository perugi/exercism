//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = "";

  for (let i = 0; i < dna.length; i++) {
    rna += RNA_TO_DNA[dna[i]];
  }

  return rna;
};

const RNA_TO_DNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};
