class Coach {
  #name;
  #hateMenus;
  #menus;

  constructor(name) {
    this.#name = name;
    this.#menus = [];
  }

  getName() {
    return this.#name;
  }

  setHateMenus(hateMenus) {
    this.#hateMenus = [...hateMenus];
  }

  hasHateMenu(menu) {
    return this.#hateMenus.includes(menu);
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
