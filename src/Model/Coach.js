const MissionUtils = require("@woowacourse/mission-utils");
const { MENU_SAMPLE, MENU_CATEGORY } = require("../constant/value");

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

  addMenu(categoryNumber) {
    const newMenu = this.randomMenu(categoryNumber);
    this.#menuOfWeek.push(newMenu);
  }

  randomMenu(categoryNumber) {
    const category = MENU_CATEGORY[categoryNumber - 1];
    const menuArray = MENU_SAMPLE[category].split(", ");
    const numberArray = menuArray.map((menu, index) => (menu = index));
    const menuNumber = MissionUtils.Random.shuffle(numberArray)[0];
    const menu = menuArray[menuNumber];
    if (this.isPickyMenu(menu)) {
      return this.randomMenu(categoryNumber);
    }
    if (this.isDuplicatedMenu(menu)) {
      return this.randomMenu(categoryNumber);
    }
    return menu;
  }

  isPickyMenu(newMenu) {
    return this.#pickyMenu.includes(newMenu);
  }

  isDuplicatedMenu(newMenu) {
    return this.#menuOfWeek.includes(newMenu);
  }
}

module.exports = Coach;
