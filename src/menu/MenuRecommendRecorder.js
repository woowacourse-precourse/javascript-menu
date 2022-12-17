class MenuRecommendRecorder {
  #records = {};
  writeMenuRecommendRecord(name, eatingRecords) {
    if (!this.#records[name]) this.#records[name] = [];
    this.#records[name].push(eatingRecords);
  }
  getMenuRecommendRecord() {
    return this.#records;
  }
}

module.exports = MenuRecommendRecorder;
