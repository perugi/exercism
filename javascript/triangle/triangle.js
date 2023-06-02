//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = [...sides];
  }

  /**
   * Determines if the triangle is equilateral by checking if all sides are equal.
   *
   * @return {boolean} true if all sides are equal, false otherwise.
   */
  get isEquilateral() {
    // If at least one side is zero, then all sides of an equilateral triangle are zero,
    // making it not a triangle.
    if (this.sides[0] === 0) return false;

    if (!this._isTriangle()) return false;

    return this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2];
  }

  /**
   * Returns true if the triangle is isosceles, otherwise false.
   * A triangle is isosceles if at least two sides are the same.
   *
   * @return {boolean} Whether or not the triangle is isosceles.
   */
  get isIsosceles() {
    if (!this._isTriangle()) return false;

    return (
      this.sides[0] === this.sides[1] ||
      this.sides[0] === this.sides[2] ||
      this.sides[1] === this.sides[2]
    );
  }

  /**
   * This function checks if the triangle is scalene. A scalene triangle is a triangle
   * that has no equal sides.
   *
   * @return {boolean} Returns true if the triangle is scalene, false otherwise.
   */
  get isScalene() {
    if (!this._isTriangle()) return false;

    return (
      this.sides[0] !== this.sides[1] &&
      this.sides[1] !== this.sides[2] &&
      this.sides[2] !== this.sides[0]
    );
  }

  /**
   * Determines if the current object represents a valid triangle
   * based on the lengths of its sides (for all combinations, the sum of two sides
   * should be larger than the third).
   *
   * @return {boolean} Whether the current object represents a valid triangle.
   */
  _isTriangle() {
    return (
      this.sides[0] + this.sides[1] > this.sides[2] &&
      this.sides[1] + this.sides[2] > this.sides[0] &&
      this.sides[0] + this.sides[2] > this.sides[1]
    );
  }
}
