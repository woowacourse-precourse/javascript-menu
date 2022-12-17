class Coach {
  #name;
  #hateFoods;
  #menus;

  constructor(name) {
    this.#name = name;
    this.#menus = [];
  }

  getName() {
    return this.#name;
  }

  setHateFoods(hateFoods) {
    this.#hateFoods = [...hateFoods];
  }

  hasHateMenu(menu) {
    return this.#hateFoods.includes(menu);
  }

  selectMenu(menu) {
    this.#menus.push(menu);
  }

  hasMenu(menu) {
    return this.#menus.includes(menu);
  }

  getMenus() {
    return this.#menus;
  }
}

module.exports = Coach;
