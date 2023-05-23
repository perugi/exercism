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
    this.uid = 0;
  }

  _add(name, prev, next) {
    const prevId = prev ? prev.id : null;
    const nextId = next ? next.id : null;

    const newStation = {
      name: name,
      id: this.uid,
      prev: prevId,
      next: nextId,
    };

    if (this.length === 0) {
      this.head = newStation;
      this.tail = newStation;
    } else {
      if (prev !== null) {
        this.stations[prev.id].next = newStation.id;
      } else {
        // a null on the prev signifies a new head
        this.head = newStation;
      }

      if (next !== null) {
        this.stations[next.id].prev = newStation.id;
      } else {
        // a null on the next signifies a new tail
        this.tail = newStation;
      }
    }

    this.stations[newStation.id] = newStation;
    this.length++;
    this.uid++;
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
    const oldLastStation = this.tail;
    this._remove(oldLastStation.id);

    return oldLastStation.name;
  }

  unshift(station) {
    this._add(station, null, this.head);
  }

  shift() {
    const oldFirstStation = this.head;
    this._remove(oldFirstStation.id);

    return oldFirstStation.name;
  }

  delete(name) {
    // Find the first occurence of the station with the specified name and gets its id.
    let id;

    for (
      let station = this.head;
      station !== undefined;
      station = this.stations[station.next]
    ) {
      if (station.name === name) {
        id = station.id;
        break;
      }
    }

    if (id !== undefined) {
      this._remove(id);
    }
  }

  count() {
    return this.length;
  }
}
