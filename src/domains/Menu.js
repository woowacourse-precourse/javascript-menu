class Menu {
  /** @type {string} */
  #name;

  /**
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

module.exports = Menu;
