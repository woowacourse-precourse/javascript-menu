class Coach {
  #name;
  constructor(CoachName) {
    this.#name = CoachName;
  }

  getName(answer) {
    return this.#name;
  }
}

module.exports = Coach;
