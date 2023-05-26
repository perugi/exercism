// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this._name = this._newRobotName();
  }

  _newRobotName() {
    let newName = "";

    do {
      newName =
        this._generateRandomLetter() +
        this._generateRandomLetter() +
        this._generateRandomDigit() +
        this._generateRandomDigit() +
        this._generateRandomDigit();
    } while (usedNames.includes(newName));

    usedNames.push(newName);

    return newName;
  }

  _generateRandomLetter() {
    let randomAscii = Math.floor(Math.random() * 26) + 65;

    return String.fromCharCode(randomAscii);
  }

  _generateRandomDigit() {
    let randomDigit = Math.floor(Math.random() * 10);

    return String(randomDigit);
  }

  reset() {
    usedNames.slice(usedNames.indexOf(this._name), 1);

    this._name = this._newRobotName();
  }

  get name() {
    return this._name;
  }
}

Robot.releaseNames = () => {};

let usedNames = [];
