//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(listToAppend) {
    return new List([...this.values, ...listToAppend.values]);
  }

  concat(listsToAppend) {
    let appendedList = new List(this.values);
    for (let list of listsToAppend.values) {
      appendedList = appendedList.append(list);
    }

    return appendedList;
  }

  filter(predicate) {
    let filteredList = new List();
    for (let element of this.values) {
      if (predicate(element) === true) {
        filteredList = filteredList.append(new List([element]));
      }
    }

    return filteredList;
  }

  map(mapFunction) {
    let mappedList = new List();
    for (let element of this.values) {
      mappedList = mappedList.append(new List([mapFunction(element)]));
    }

    return mappedList;
  }

  length() {
    let length = 0;
    for (let _ of this.values) {
      length++;
    }

    return length;
  }

  foldl(foldFunction, accumulator) {
    for (let element of this.values) {
      accumulator = foldFunction(accumulator, element);
    }

    return accumulator;
  }

  foldr(foldFunction, accumulator) {
    let reversedList = this.reverse();

    return reversedList.foldl(foldFunction, accumulator);
  }

  reverse() {
    let reversedList = new List();
    for (let element of this.values) {
      reversedList = new List([element, ...reversedList.values]);
    }

    return reversedList;
  }
}
