const InValidInputError = require("../error/InValidInputError");
const ERROR_MESSAGE = require("../error/error.constants");
const { makeCategory } = require("../utils/CategoryMaker");

class CouchMenu {
  #couchName;
  #notWantMenu;
  #menuList;

  constructor(name, notWantMenu) {
    this.#couchName = name;
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

  getNotWantMenu() {
    return this.#notWantMenu;
  }
}

module.exports = CouchMenu;
