class CategoryRecorder {
  #categoryRecord = {
    일식: 0,
    한식: 0,
    중식: 0,
    아시안: 0,
    양식: 0,
  };
  isMoreThanTwice(category) {
    return this.#categoryRecord[category] > 2;
  }
  writeRecord(category) {
    this.#categoryRecord[category] += 1;
  }
}

module.exports = CategoryRecorder;
