const Category = require('./Category');
const Coach = require('./Coach');
const Menu = require('./Menu');

class Suggestion {
  /** @type {Coach} */
  #coach;

  /** @type {Category} */
  #category;

  /** @type {Menu} */
  #menu;

  /**
   * @param {Coach} coach
   * @param {Category} category
   * @param {Menu} menu
   */
  constructor(coach, category, menu) {
    this.#coach = coach;
    this.#category = category;
    this.#menu = menu;
  }

  getCoach() {
    return this.#coach;
  }

  getCategory() {
    return this.#category;
  }

  getMenu() {
    return this.#menu;
  }
}

module.exports = Suggestion;
