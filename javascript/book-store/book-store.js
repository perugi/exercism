//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  // This object represents the total costs of the books, where the keys represents the
  // maximum size of the groupings.
  let costs = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (let maxSize in costs) {
    costs[maxSize] = calculate_cost(create_grouping(books, maxSize));
  }

  // Return the minimal value out of all the costs.
  return Math.min(...Object.values(costs));
};

function create_grouping(books, maxBooks = 5) {
  let grouping = [];
  let booksCopy = [...books];

  let numberOfBooks = books.reduce(
    (aggregate, book) => {
      aggregate[book] += 1;
      return aggregate;
    },
    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  );

  while (booksCopy.length) {
    let group = new Set(booksCopy);

    while (group.size > maxBooks) {
      // Delete the book in the set, of which there are the smallest number overall.
      // For the smallestNumOfBooks, the first element represents the number of books
      // and the second the book in question.
      let smallestNumOfBooks = [Number.POSITIVE_INFINITY, 0];
      for (let book of group) {
        if (numberOfBooks[book] < smallestNumOfBooks[0]) {
          smallestNumOfBooks[0] = numberOfBooks[book];
          smallestNumOfBooks[1] = book;
        }
      }
      group.delete(smallestNumOfBooks[1]);
    }

    // Delete any books in the current set from the list of books that are not grouped yet.
    for (let book of group) {
      booksCopy.splice(booksCopy.indexOf(book), 1);
    }

    grouping.push(group);
  }

  return grouping;
}

function calculate_cost(grouping) {
  const BOOK_COSTS = [800, 1520, 2160, 2560, 3000];

  return grouping.reduce((sum, group) => {
    return sum + BOOK_COSTS[group.size - 1];
  }, 0);
}
