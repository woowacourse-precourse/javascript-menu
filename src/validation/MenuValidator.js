const { ERROR_MESSAGE, MENU_VALIDITY } = require("../constants");
const { getMenu } = require("../util/MenuMaker");
const StringValidator = require("./StringValidator");

const { MAX_MENU_COUNT, MIN_MENU_COUNT } = MENU_VALIDITY;
const MENU = "MENU";

class MenuValidator {
  #allMenu;

  constructor(menuArr) {
    this.#allMenu = getMenu();
    this.checkInclusion(menuArr);
  }

  checkInclusion(menuArr) {
    const menu = this.#allMenu;
    const menuArrays = Object.values(menu);
    const allMenusWithoutCategory = menuArrays.flat(Infinity);
    menuArr.forEach((menu) => {
      if (!allMenusWithoutCategory.includes(menu)) {
        throw ERROR_MESSAGE.MENU_NOT_INCLUDED;
      }
    });
    this.validateMenuCount(menuArr);
  }

  validateMenuCount(menuArr) {
    const menuCount = menuArr.length;
    if (menuCount < MIN_MENU_COUNT || menuCount > MAX_MENU_COUNT)
      throw ERROR_MESSAGE.MENU_COUNT;
    this.validateStrings(menuArr, MENU);
  }

  validateStrings(namesArr, type) {
    new StringValidator(namesArr, type);
  }
}

module.exports = MenuValidator;
