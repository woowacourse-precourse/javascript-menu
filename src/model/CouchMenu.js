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

  getNotWantMenu() {
    return this.#notWantMenu;
  }

  getMenus() {
    return this.#menuList;
  }
}

module.exports = CouchMenu;
