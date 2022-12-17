const { ErrorMsg, StaticValues } = require("../static/Static");
const SearchMenu = require("../utils/SearchMenu");

class UnLikeMenu {
  #unLikeMenu;

  constructor(input) {
    const menus = input.split(",");

    this.validate(menus);
    this.#unLikeMenu = input.split(",");
  }

  validate(menus) {
    if (menus.length > StaticValues.CAN_INPUT_UNLIKE_MENU_COUNT)
      throw new Error(ErrorMsg.UNLIKE_MENU_COUNT);
    menus.forEach((m) => {
      if (!SearchMenu.getIsMenuExist(m))
        throw new Error(ErrorMsg.MENU_NOT_EXIST);
    });
  }

  getUnLikeMenu() {
    return this.#unLikeMenu;
  }
}

module.exports = UnLikeMenu;
