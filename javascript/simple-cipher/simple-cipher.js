//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    this._key = key ?? this._generateRandomKey();
  }

  encode(plainText) {
    return plainText.split("").reduce((cipherText, plainChar, i) => {
      let cipherShift =
        this._key.charCodeAt(i % this._key.length) - "a".charCodeAt(0);
      let cipherCharCode = plainChar.charCodeAt(0) + cipherShift;
      if (cipherCharCode > "z".charCodeAt(0)) cipherCharCode -= 26;

      return cipherText + String.fromCharCode(cipherCharCode);
    }, "");
  }

  decode(cipherText) {
    return cipherText.split("").reduce((plainText, cipherChar, i) => {
      let cipherShift =
        this._key.charCodeAt(i % this._key.length) - "a".charCodeAt(0);
      let plainCharCode = cipherChar.charCodeAt(0) - cipherShift;
      if (plainCharCode < "a".charCodeAt(0)) plainCharCode += 26;

      return plainText + String.fromCharCode(plainCharCode);
    }, "");
  }

  _generateRandomKey(length = 10) {
    let key = "";
    for (let i = 0; i < length; i++) {
      key += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    return key;
  }

  get key() {
    return this._key;
  }
}
