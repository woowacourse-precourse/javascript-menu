class Coach {
  #nonEdibleMenu;
  #menus;

  constructor() {
    this.#nonEdibleMenu = [];
    this.#menus = [];
  }

  setNonEdibleMenus(menus) {
    if (menus.length > 0) {
      this.#nonEdibleMenu = menus;
    }
  }

  addMenu(menu) {
    this.#menus.push(menu);
  }

  getCoachLog() {
    return {
      nonEdibleMenu: this.#nonEdibleMenu,
      menus: this.#menus,
    };
  }
}

module.exports = Coach;
