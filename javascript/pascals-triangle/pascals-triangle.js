//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numberOfRows) => {
  if (numberOfRows === 0) {
    return [];
  }
  let generatedRows = [[1]];

  for (let i = 1; i < numberOfRows; i++) {
    let previousRow = [0, ...generatedRows[i - 1], 0];

    let newRow = [];
    for (let i = 0; i < previousRow.length - 1; i++) {
      newRow.push(previousRow[i] + previousRow[i + 1]);
    }
    generatedRows.push(newRow);
  }

  return generatedRows;
};
