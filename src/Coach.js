class Coach {
  #name = "";
  #noFood = [];

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

}

module.exports = Coach;