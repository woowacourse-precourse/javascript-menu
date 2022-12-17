const { ErrorMsg, StaticValues } = require("../static/Static");

class UnLikeMenu {
  #unLikeMenu;

  constructor(input) {
    this.validate(input);
    this.#unLikeMenu = input.split(",");
  }

  validate(input) {
    if (input.split(",").length > StaticValues.CAN_DUPLICATE_UNLIKE_MENUS)
      throw new Error(ErrorMsg.UNLIKE_MENU_COUNT);
  }

  getUnLikeMenu() {
    return this.#unLikeMenu;
  }
}

module.exports = UnLikeMenu;
