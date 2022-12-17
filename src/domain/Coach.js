const { ErrorMsg, StaticValues } = require("../static/Static");
const RecommendMenu = require("./RecommendMenu");
const UnLikeMenu = require("./UnLikeMenu");

class Coach {
  #name;
  #unLikeMenu;
  #recommendMenu;

  constructor(name) {
    this.validate(name);

    this.#name = name;
  }

  validate(name) {
    if (
      name.length < StaticValues.COACH_NAME_LENGTH_MIN ||
      name.length > StaticValues.EAT_TOGETHER_COUNT_MAX
    )
      throw new Error(ErrorMsg.COACH_NAME);
  }

  setUnLikeMenu(menu) {
    this.#unLikeMenu = new UnLikeMenu(menu);
  }

  setRecommendMenu(menu) {
    this.#recommendMenu = new RecommendMenu(menu);
  }

  getUnLikeMenu() {
    return this.#unLikeMenu.getUnLikeMenu();
  }

  getRecommendMenu() {
    return this.#recommendMenu.getRecommendMenu();
  }

  getName() {
    return this.#name;
  }
}

module.exports = Coach;
