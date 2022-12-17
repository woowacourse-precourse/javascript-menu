class MenuSelector {
  #coachs;

  constructor(coachs) {
    this.#coachs = coachs;
  }

  getCoachs() {
    return this.#coachs;
  }
}

module.exports = MenuSelector;
