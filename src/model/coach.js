class Coach {
  #hates;
  #name;

  constructor(name) {
    this.#name = name;
    this.#hates = [];
  }
  getHates() {
    return this.#hates.slice(0);
  }
  getName() {
    return this.#name;
  }
  addHates(hates) {
    const split = hates.split(",").map((v) => v.trim());
    this.#hates.push(...split);
  }
}

module.exports = Coach;
