class QuickFindUF {
  constructor(length) {
    this.arrayOfIds = [];

    for (let i = 0; i < length; i++) {
      this.arrayOfIds[i] = i;
    }
  }

  areTheyConnected(idx1, idx2) {
    return this.arrayOfIds[idx1] === this.arrayOfIds[idx2];
  }

  connect(idx1, idx2) {
    const id1 = this.arrayOfIds[idx1];
    const id2 = this.arrayOfIds[idx2];

    for (let i = 0; i < this.arrayOfIds.length; i++) {
      const currId = this.arrayOfIds[i];
      if (currId === id1) this.arrayOfIds[i] = id2;
    }
  }
}

module.exports = QuickFindUF
