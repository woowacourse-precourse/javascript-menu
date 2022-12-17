class Coach {
  #name;

  #dislikeMenu;

  constructor(name) {
    this.#name = name;
  }

  setDislikeMenu(menu) {
    this.#dislikeMenu = menu.split(',');
  }

  getName() {
    return this.#name;
  }
}

module.exports = Coach;
