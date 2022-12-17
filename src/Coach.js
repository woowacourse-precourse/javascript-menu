class Coach {
  #name;
  #banMenuSet;
  constructor(CoachName) {
    this.#name = CoachName;
  }

  addBanMenus(banMenuArray) {
    this.#banMenuSet = new Set(banMenuArray);
    return this.#banMenuSet;
  }

  getName() {
    return this.#name;
  }
}

module.exports = Coach;
