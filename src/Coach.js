class Coach {
  #name;
  constructor(CoachName) {
    this.#name = CoachName;
  }

  getName() {
    return this.#name;
  }
}

module.exports = Coach;
