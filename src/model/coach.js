class Coach {
  #hates;
  #name;
  #serves;
  constructor(name) {
    this.#name = name;
    this.#hates = [];
    this.#serves = [];
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
  addServes(menus) {
    this.#serves.push(menus);
  }
  getServes() {
    return this.#serves;
  }
}

module.exports = Coach;
