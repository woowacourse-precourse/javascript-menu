class Coach {
  #name;
  #bannedMenu;

  constructor(name) {
    this.#name = name;
  }

  addBannedMenu(bannedMenu) {
    this.#bannedMenu = bannedMenu;
  }

  getName() {
    return this.#name;
  }
}
