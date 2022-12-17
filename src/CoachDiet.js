const { RandomMenuGenerator } = require('./RandomGenerator');

class CoachDiet {
  #name;
  #impossibles;
  #menu;

  constructor(name) {
    this.#name = name;
    this.#impossibles = [];
    this.#menu = [];
  }

  // setName(name) {}
  getName() {
    return this.#name;
  }

  setImpossibles(impossibles) {
    if (impossibles === '') return;
    const impossibleList = impossibles.split(',');
    this.#impossibles = impossibleList;
  }

  getImpossibles() {
    return this.#impossibles;
  }

  setMenu(menu) {
    this.#menu.push(menu);
  }

  validateImpossible(food) {
    if (this.#impossibles.includes(food)) return false;
    return true;
  }

  recommendMenu(category) {
    let menu = RandomMenuGenerator(category);
    while (!this.validateImpossible(menu)) {
      menu = RandomMenuGenerator(category);
    }
    this.setMenu(menu);
    console.log(this.#name, this.#menu);
  }

  getMenu() {
    return this.#menu;
  }
}

module.exports = CoachDiet;
