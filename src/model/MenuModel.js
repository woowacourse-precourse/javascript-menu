const GameModel = require('./GameModel');
const { GAME_MESSAGE, MENUS, CATEGORY } = require('../constants');
const { Random } = require('@woowacourse/mission-utils');

class MenuModel extends GameModel {
  #coachesList = [];
  #menusCoachesCantEat = [];
  #dailyRecommendedCategory;
  #dailyRecommendedMenus;

  getCoachesName() {
    return this.#coachesList;
  }

  setCoachesName(coachesList) {
    this.#coachesList = coachesList;
  }

  getMenusCoachesCantEat() {
    return this.#menusCoachesCantEat;
  }

  setMenusCoachesCantEat(menusCoachCantEat) {
    this.#menusCoachesCantEat.push(menusCoachCantEat);
  }

  makeDailyRecommendedCategory() {
    this.#dailyRecommendedCategory = [...Array(5)].reduce(dailyRecommendedCategory => {
      while (true) {
        const category = Random.pickNumberInRange(1, 5);
        const recommendedCategory = CATEGORY[category];

        const isCategoryNotValid = dailyRecommendedCategory.some(menus => menus.length > 2);
        if (!isCategoryNotValid) {
          dailyRecommendedCategory.push(recommendedCategory);
          break;
        }
      }

      return dailyRecommendedCategory;
    }, []);

    return this.#dailyRecommendedCategory;
  }

  // ex [일식 양식 중식, ...]
  makeDailyRecommendedMenus(dailyRecommendedCategory) {
    // 1. 각 유저의 음식들 만들기 -> dailyRecommendedCategory.map
    // 2.
    // const userMenus =
  }
}

module.exports = MenuModel;
