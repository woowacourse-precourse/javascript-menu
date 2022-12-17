class Menu {
  #uneatableMenu = [];

  validate(menus) {
    const uneatableMenus = menus.split(",");

    this.isValidQuantity(uneatableMenus);

    this.#uneatableMenus.concat(uneatableMenus);
  }
  isValidQuantity(uneatableMenus) {
    if (!(uneatableMenus.length >= 0 && uneatableMenus.length <= 2)) {
      throw new Error("[ERROR] 못 먹는 메뉴는 최소 0개, 최대 2개이어야 합니다");
    }
  }

  makeRecommandResult() {}
}

module.exports = Menu;
