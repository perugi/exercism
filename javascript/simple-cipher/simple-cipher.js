//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor() {
    self._key = key ?? "xxxxxxxxxx";
  }

  encode(plaintext) {
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
      ciphertext += plaintext[i];
    }
  }

  decode(ciphertext) {
    throw new Error("Remove this statement and implement this function");
  }

  get key() {
    return self._key;
  }
}
