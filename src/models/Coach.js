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
}

module.exports = Coach;
