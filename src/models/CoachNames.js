class CoachNames {
  #data;

  constructor(input) {
    this.#data = input.split(',');
  }

  get() {
    return this.#data;
  }
}

module.exports = CoachNames;
