//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.stations = {};
  }

  _add(id, prev, next) {
    const prevId = prev ? prev.id : null;
    const nextId = next ? next.id : null;

    const newStation = {
      id: id,
      prev: prevId,
      next: nextId,
    };

    if (this.length === 0) {
      this.stations[id] = newStation;
      this.head = newStation;
      this.tail = newStation;
    } else {
      if (prev !== null) {
        this.stations[prev.id].next = id;
      } else {
        // a null on the prev signifies a new head
        this.head = newStation;
      }

      if (next !== null) {
        this.stations[next.id].prev = id;
      } else {
        // a null on the next signifies a new tail
        this.tail = newStation;
      }
    }

    this.stations[id] = newStation;
    this.length++;
  }

  _remove(id) {
    if (this.length === 0) {
      return;
    }

    const stationToRemove = this.stations[id];
    if (!stationToRemove) {
      return;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (stationToRemove === this.head) {
        this.stations[stationToRemove.next].prev = null;
        this.head = this.stations[stationToRemove.next];
      } else {
        this.stations[stationToRemove.prev].next = stationToRemove.next;
      }
      if (stationToRemove === this.tail) {
        this.stations[stationToRemove.prev].next = null;
        this.tail = this.stations[stationToRemove.prev];
      } else {
        this.stations[stationToRemove.next].prev = stationToRemove.prev;
      }
    }

    delete this.stations[id];
    this.length--;
  }

  push(station) {
    this._add(station, this.tail, null);
  }

  pop() {
    const oldLastStation = this.tail.id;
    this._remove(oldLastStation);

    return oldLastStation;
  }

  unshift(station) {
    this._add(station, null, this.head);
  }

  shift() {
    const oldFirstStation = this.head.id;
    this._remove(oldFirstStation);

    return oldFirstStation;
  }

  delete(station) {
    this._remove(station);
  }

  count() {
    return this.length;
  }
}

// const list = new LinkedList();
// list.push(7);
// list.push(13);
// list.push(11);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
