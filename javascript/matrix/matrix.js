//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(inputMatrix) {
    this.inputMatrix = inputMatrix;
    this._rows = this.inputMatrix
      .split("\n")
      .map((row) => row.split(" ").map(Number));
    this._columns = this._transposeArray(this._rows);
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }

  _transposeArray(array) {
    return array[0].map((_, colIndex) => array.map((row) => row[colIndex]));
  }
}
