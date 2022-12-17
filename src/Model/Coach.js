const { MENU_SAMPLE } = require("../constant/value");

class Coach {
  #name;
  #pickyMenu;
  #menuOfWeek;

  constructor(name, pickyMenu) {
    this.validatePickyMenu(pickyMenu);
    this.#name = name;
    this.#pickyMenu = pickyMenu;
    this.#menuOfWeek = [];
  }

  getName() {}

  validatePickyMenu(pickyMenu) {
    if (pickyMenu.length > 2)
      throw new Error("[ERROR] 못 먹는 메뉴는 최대 2개까지만 입력 가능합니다.");
  }
}

module.exports = Coach;
