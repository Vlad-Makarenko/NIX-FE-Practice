class circleArray {
  constructor() {
    this.array = [];
  }

  add(value) {
    this.array.push(value);
  }

  remove(index) {
    if (index >= 0) {
      this.array.splice(index % this.array.length, 1);
    } else {
      index = -index % this.array.length;
      this.array.splice(this.array.length - index, 1);
    }
  }

  get(index) {
    if (index >= 0) {
      return this.array[index % this.array.length];
    } else {
      index = -index % this.array.length;
      return this.array[this.array.length - index];
    }
  }
}
