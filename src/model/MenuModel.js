const GameModel = require('./GameModel');
const { GAME_MESSAGE, MENUS, CATEGORY } = require('../constants');
const { Random } = require('@woowacourse/mission-utils');

// input 예시
// 코치 이름: [토미, 제임스]
// 못먹는음식: [[a,b], [c,d]]
// 카테고리와 해당 카테고리의 메뉴를 이용해 메뉴를 추천
//  ->

class MenuModel extends GameModel {
  #coachesList = [];
  #menusCoachesCantEat = [];
  #recommendMenus = [...Array(MENUS.length)].fill([]);
  #category = Object.keys(MENUS);

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

  makeRecommendedMenus() {
    const category = Random.pickNumberInRange(1, 5); // ex. 1
    const recommendedCategory = CATEGORY[category]; // ex. 일식

    // ex. 메뉴 선택
    // 1.
    const menus = MENUS[recommendedCategory].split(' '); // ['규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼]
    const recommendedMenu = Random.shuffle(menus)[0];

    console.log(recommendedMenu);
  }
}

module.exports = MenuModel;
