const RecommendMenu = require("./RecommendMenu");
const UnLikeMenu = require("./UnLikeMenu");

class Coach {
  #name;
  #unLikeMenu;
  #recommendMenu;

  constructor(name) {
    this.#name = name;
  }

  // 메뉴는 문자열로 입력하기
  setUnLikeMenu(menu) {
    this.#unLikeMenu = new UnLikeMenu(menu);
  }

  // 메뉴는 배열로 입력하기
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
