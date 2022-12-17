class Coach {
  #name;
  #menus;
  #bannedMenu;

  constructor(name) {
    this.#name = name;
    this.#menus = [];
  }

  addBannedMenu(bannedMenu) {
    this.#bannedMenu = bannedMenu;
  }

  addMenu(menu) {
    if (this.#menus.includes(menu) || this.#bannedMenu.includes(menu)) {
      return false;
    }
    this.#menus.push(menu);
    return true;
  }

  getName() {
    return this.#name;
  }

  getMenus() {
    return this.#menus;
  }
}

module.exports = Coach;
