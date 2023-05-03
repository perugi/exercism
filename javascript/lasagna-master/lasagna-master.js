/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Returns the cooking status based on the remaining time
 *
 * @param {number} time - remaining time in the cook
 * @returns {string} Status of the cook
 */
export function cookingStatus(time) {
  if (time === undefined) {
    return "You forgot to set the timer.";
  } else if (time > 0) {
    return "Not done, please wait.";
  } else {
    return "Lasagna is done.";
  }
}

/**
 * Calculates the preparation time based on a list of layers and time per layer.
 *
 * @param {Array} layers - an array of layers in the lasagn
 * @param {Number} layerTime
 * @returns {Number} Time needed for the preparation of the lasagna
 */
export function preparationTime(layers, layerTime = 2) {
  return layers.length * layerTime;
}

export function quantities(layers) {
  let amounts = { noodles: 0, sauce: 0 };

  for (const layer of layers) {
    if (layer === "noodles") {
      amounts.noodles += 50;
    } else if (layer === "sauce") {
      amounts.sauce += 0.2;
    }
  }

  return amounts;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  let scaledRecipe = {};

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = (recipe[ingredient] / 2) * portions;
  }

  return scaledRecipe;
}
