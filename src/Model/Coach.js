class Coach {
  #name;
  #notEatMenu;
  #eatMenu = [];

  constructor(name) {
    this.#name = name;
  }
  
  getNotEatMenu(notEatsMenu) {
    this.#notEatMenu = notEatsMenu.split(',');
  }

  getEatMenu(eatMenu) {
    this.#eatMenu.push(eatMenu);
  }

  getName() {
    return this.#name;
  }

  showEatMenu() {
    return this.#eatMenu;
  }
}

module.exports = Coach;
