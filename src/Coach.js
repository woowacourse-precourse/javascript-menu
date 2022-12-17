class Coach {
  #name;
  #vannedMenu;

  constructor(name) {
    this.#name = name;
  }

  addVannedMenu(vannedMenu) {
    this.#vannedMenu = vannedMenu;
  }

  getName() {
    return this.#name;
  }
}
