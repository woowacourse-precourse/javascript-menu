const MissionUtils = require("@woowacourse/mission-utils");
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

  validatePickyMenu(pickyMenu) {
    if (pickyMenu.length > 2)
      throw new Error("[ERROR] 못 먹는 메뉴는 최대 2개까지만 입력 가능합니다.");
  }

  getName() {
    return this.#name;
  }

  getPickyMenu() {
    return this.#pickyMenu;
  }

  getMenuOfWeek() {
    return this.#menuOfWeek;
  }

  randomMenu(categoryNumber) {
    const category = Object.keys(MENU_SAMPLE)[categoryNumber - 1];
    const menuArray = MENU_SAMPLE[category].split(", ");
    const numberArray = menuArray.map((menu, index) => (menu = index));
    const menuNumber = MissionUtils.Random.shuffle(numberArray)[0];
    const menu = menuArray[menuNumber];
    if (this.isPickyMenu(menu)) {
      this.randomMenu(categoryNumber);
    }
    return menu;
  }
}

module.exports = Coach;
