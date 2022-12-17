class Coach {
  #nonEdibleMenu;
  #menus;

  constructor() {
    this.#menus = [];
  }

  setNonEdibleMenus(menus) {
    this.#nonEdibleMenu = menus;
  }
}

module.exports = Coach;
