const InValidInputError = require("../error/InValidInputError");
const ERROR_MESSAGE = require("../error/error.constants");
const MENU_LIST = require("../constants/menu.constants");
const { getRandomMenu } = require("../utils/CategoryMaker");

class CouchMenu {
  #coachName;
  #notWantMenu;
  #menuList = [];

  constructor(name, notWantMenu) {
    this.#coachName = name;
    const notWantMenuList = notWantMenu.split(",");
    if (this.#isValidNotWantMenu(notWantMenuList))
      this.#notWantMenu = notWantMenuList;
  }

  #baseValidate(condition, message) {
    if (!condition) throw new InValidInputError(message);
    return true;
  }
  #isValidNotWantMenu(notWantMenuList) {
    return this.#isValidMenuNum(notWantMenuList);
  }
  #isValidMenuNum(menuList) {
    return this.#baseValidate(
      menuList.length <= 2,
      ERROR_MESSAGE.INVALID_NOT_WANT_MENU_NUM
    );
  }

  #filterCategory(category) {
    switch (category) {
      case 1:
        return "일식";
      case 2:
        return "한식";
      case 3:
        return "중식";
      case 4:
        return "아시안";
      case 5:
        return "양식";
      default:
        throw new Error("없는 카테고리입니다.");
    }
  }

  updateMenu(category) {
    const categoryMenus = this.#filterCategory(category);
    const splitedMenus = MENU_LIST[categoryMenus].split(", ");
    const menuNumArr = Array.from(
      { length: splitedMenus.length },
      (_, idx) => idx + 1
    );
    while (1) {
      const idx = getRandomMenu(menuNumArr);
      const curMenu = splitedMenus[idx - 1];
      if (
        this.#menuList.includes(curMenu) ||
        this.#notWantMenu.includes(curMenu)
      )
        continue;
      this.#menuList.push(curMenu);
      break;
    }
  }

  getCoachName() {
    return this.#coachName;
  }

  getNotWantMenu() {
    return this.#notWantMenu;
  }

  getMenus() {
    return this.#menuList;
  }
}

module.exports = CouchMenu;
