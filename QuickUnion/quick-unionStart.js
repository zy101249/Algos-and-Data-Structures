
class QuickUnion {
  constructor(length) {
    this.arrayOfIds = Array(length);

    for (let i = 0; i < this.arrayOfIds.length; i++) {
      this.arrayOfIds[i] = i;
    }
  }

  root(idx) {
    while (this.arrayOfIds[idx] !== idx) {
      idx = this.arrayOfIds[idx];
    }
    return idx;
  }

  areTheyConnected(firstIndex, secondIndex) {
    return this.root(firstIndex) === this.root(secondIndex);
  }

  connect(firstIndex, secondIndex) {
    const root1 = this.root(firstIndex);
    const root2 = this.root(secondIndex);
    this.arrayOfIds[root1] = root2;
  }
}

module.exports = QuickUnion;
