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
      const categoryIndex = category[count];
      const menuIndex = this.getRandomNumber();
      const categoryName = this.getMenuName(categoryIndex);
      const menu = samples[categoryName].split(', ')[menuIndex - 1];

      if (!noMenu.has(menu)) {
        menus.push(menu);
        count++;
      }
    }
    return menus;
  }

  static getMenuName(categoryIndex) {
    if (categoryIndex === 1) {
      return '일식';
    }
    if (categoryIndex === 2) {
      return '일식';
    }
    if (categoryIndex === 3) {
      return '중식';
    }
    return categoryIndex === 4 ? '아시안' : '양식';
  }

  static getRandomNumber() {
    return Random.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).shift();
  }

  // static shuffle(menuStrings) {
  //   return Random.shuffle(menuStrings);
  // }
}
module.exports = MenuPicker;

// 각 요일에 해당하는 카테고리가 주어짐
// 그러면 일단 배열에다가 추가해
// 근데 있는 거면 안 되는 거야 set 사용해도 좋고

// console.log(Random.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
