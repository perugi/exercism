// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let sumOfCards = 0;

  stack.forEach((cardInStack) => {
    if (cardInStack === card) {
      sumOfCards++;
    }
  });

  return sumOfCards;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let sumOfCards = 0;

  for (const cardInStack of stack) {
    if (Boolean(cardInStack % 2) !== type) {
      sumOfCards++;
    }
  }

  return sumOfCards;
}
