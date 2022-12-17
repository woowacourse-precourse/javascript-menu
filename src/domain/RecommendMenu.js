const { ErrorMsg, StaticValues } = require("../static/Static");
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
    if (recommendMenu.length !== StaticValues.EAT_TOGHTHER_DAYS)
      throw new Error(ErrorMsg.MENU_COUNT);
  }

  getRecommendMenu() {
    return this.#recommendMenu;
  }
}

module.exports = RecommendMenu;
