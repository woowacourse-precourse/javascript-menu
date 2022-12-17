const { Random } = require('@woowacourse/mission-utils');
const { MENUS } = require('./utils/constants');
class MenuMaker {
  #categories;
  #dislikeMenu;
  constructor(categories, dislikeMenu) {
    this.#categories = categories; //배열
    this.#dislikeMenu = dislikeMenu; //배열
  }

  createMenu() {
    const weekMenu = [];
    for (const category of this.#categories) {
      while (true) {
        const selectedMenu = this.selectRandomMenu(category);
        if (weekMenu.find((menu) => menu === selectedMenu)) continue; //이미 일주일 메뉴에 있는 경우
        if (this.#dislikeMenu.find((menu) => menu === selectedMenu)) continue; //못 먹는 메뉴일 경우
        weekMenu.push(selectedMenu);
        break;
      }
    }
    return weekMenu;
  }

  selectRandomMenu(category) {
    const numMenu = MENUS[0].length;
    const menuIndexArr = Array.from({ length: numMenu }, (_, i) => i + 1);
    const selectedMenuIndex = Random.shuffle(menuIndexArr)[0];
    const selectedMenu = MENUS[category - 1][selectedMenuIndex - 1];
    return selectedMenu;
  }
}
module.exports = MenuMaker;
