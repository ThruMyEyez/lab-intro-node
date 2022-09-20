class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort();
    this.length = this.items.length;
  }

  get(pos) {
    this.length = this.items.length;
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    this.length = this.items.length;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    this.length = this.items.length;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    this.length = this.items.length;
    if (this.length === 0) 0;
    return this.items.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  avg() {
    this.length = this.items.length;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    const sum = this.sum();
    return sum / this.length;
  }
}
const test = new SortedList();
module.exports = SortedList;
test.add(2);
test.add(3);
