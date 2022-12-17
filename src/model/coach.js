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
  addHates(hate) {
    this.#hates.push(hate);
  }
}
