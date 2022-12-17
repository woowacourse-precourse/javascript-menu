const { ErrorMsg } = require("../static/Static");
const SearchMenu = require("../utils/SearchMenu");

class RecommendMenu {
  #recommendMenu;

  constructor(recommendMenu) {
    this.validate(recommendMenu);

    this.#recommendMenu = recommendMenu;
  }

  validate(recommendMenu) {
    recommendMenu.forEach((menu) => {
      if (!SearchMenu.getIsMenuExist(menu))
        throw new Error(ErrorMsg.MENU_NOT_EXIST);
    });
  }

  getRecommendMenu() {
    return this.#recommendMenu;
  }
}

module.exports = RecommendMenu;
