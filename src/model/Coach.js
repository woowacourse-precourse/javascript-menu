class Coach {
  #name;
  #inedible;

  constructor(name) {
    this.#name = name;
    this.inedible = [];
  }

  getName() {
    return this.#name;
  }

  getInedible() {
    return this.#inedible;
  }

  addInedible(menu) {
    this.#inedible.push(menu);
  }
}

module.exports = Coach;
