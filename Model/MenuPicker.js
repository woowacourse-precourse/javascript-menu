const SAMPLE = require('../src/App');
const { Random } = require('@woowacourse/mission-utils');

class MenuPicker {
  static SAMPLES = SAMPLE;
  static recommend(noMenu, category, samples) {
    return this.makeMenuList(noMenu, category, samples);
  }

  static makeMenuList(noMenu, category, samples) {
    const menus = [];
    let count = 0;

    while (menus.length < 5) {
      // 인덱스가 의미하는 바는 카테고리의 순서야
      const categoryIndex = category[count];
      const menuIndex = this.getRandomNumber();

      if (!noMenu.has(menu)) {
        menus.push(menu);
        count++;
      }
    }
    // console.log(menus);
    return menus;
  }

  static getMenuName(categoryIndex) {
    if (categoryIndex === 1) {
    }
  }

  static getRandomNumber() {
    return Random.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    // const shuffledMenu = Random.shuffle(menuArray);
    // return shuffledMenu[0];
  }

  // static shuffle(menuStrings) {
  //   return Random.shuffle(menuStrings);
  // }
}
module.exports = MenuPicker;

// 각 요일에 해당하는 카테고리가 주어짐
// 그러면 일단 배열에다가 추가해
// 근데 있는 거면 안 되는 거야 set 사용해도 좋고

console.log(Random.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
