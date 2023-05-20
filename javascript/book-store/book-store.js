//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  return calculate_cost(create_grouping(books));
};

function create_grouping(books) {
  let grouping = [];
  let books_copy = [...books];

  while (books_copy.length) {
    let group = new Set(books_copy);
    for (let book of group) {
      books_copy.splice(books_copy.indexOf(book), 1);
    }
    grouping.push(group);
  }

  console.log(grouping);

  return grouping;
}

function calculate_cost(grouping) {
  const BOOK_COSTS = [800, 1520, 2160, 2560, 3000];

  return grouping.reduce((sum, group) => {
    console.log(sum);
    console.log(group);
    console.log(group.size);
    console.log(BOOK_COSTS[group.size - 1]);
    return sum + BOOK_COSTS[group.size - 1];
  }, 0);
}

// const basket = [1, 1, 2, 2, 3, 3, 4, 5, 1, 1, 2, 2, 3, 3, 4, 5];
// console.log(cost(basket));
