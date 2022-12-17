class Coach {
  /** @type {string} */
  #name;

  /**
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
  }
}

module.exports = Coach;
