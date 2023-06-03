//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = 0, minutes = 0) {
    console.log(`Input: ${hours}, ${minutes}`);
    this.hours = (hours + Math.floor(minutes / 60)) % 24;
    this.minutes = minutes % 60;
    console.log(`Intermediate: ${this.hours}, ${this.minutes}`);

    this._rolloverClock();
    console.log(`Output: ${this.hours}, ${this.minutes}`);
  }

  toString() {
    return `${this.hours.toString().padStart(2, "0")}:${this.minutes
      .toString()
      .padStart(2, "0")}`;
  }

  plus(minutes) {
    this.hours = (this.hours + Math.floor((this.minutes + minutes) / 60)) % 24;
    this.minutes = (this.minutes + minutes) % 60;

    return new Clock(this.hours, this.minutes);
  }

  minus(minutes) {
    this.hours = (this.hours - Math.floor(this.minutes - minutes / 60)) % 24;
    this.minutes = (this.minutes - minutes) % 60;

    this._rolloverClock();

    return new Clock(this.hours, this.minutes);
  }

  equals() {
    throw new Error("Remove this statement and implement this function");
  }

  _rolloverClock() {
    if (this.hours < 0) {
      this.hours += 24;
    }

    if (this.minutes < 0) {
      this.minutes += 60;
      this.hours -= 1;
    }
  }
}
