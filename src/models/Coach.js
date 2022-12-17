class Coach {
  #name;

  #dislikeMenu;

  #menu = [];

  constructor(name) {
    this.#name = name;
  }

  setDislikeMenu(menu) {
    this.#dislikeMenu = menu.split(',');
  }

  getName() {
    return this.#name;
  }

  hasSameMenu(menu) {
    return this.#menu.includes(menu);
  }

  isDislikeMenu(menu) {
    return this.#dislikeMenu.includes(menu);
  }

  setMenu(menu) {
    this.#menu.push(menu);
  }

  getMenu() {
    return this.#menu;
  }
}

module.exports = Coach;
