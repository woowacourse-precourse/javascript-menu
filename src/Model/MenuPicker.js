const { Random } = require('@woowacourse/mission-utils');

class MenuPicker {
  static menuIndices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  static recommend(noMenu, category, samples) {
    return this.makeMenuList(noMenu, category, samples);
  }

  static makeMenuList(noMenu, category, samples) {
    const menus = [];

    while (menus.length < 5) {
      const categoryIndex = category[menus.length];
      const categoryName = this.getMenuName(categoryIndex);
      const menuIndex = this.getRandomNumber(this.menuIndices);
      const menu = samples[categoryName].split(', ')[menuIndex - 1];

      if (!noMenu.has(menu)) {
        menus.push(menu);
      }
    }
    return menus;
  }

  static getMenuName(categoryIndex) {
    if (categoryIndex === 1) {
      return '일식';
    }
    if (categoryIndex === 2) {
      return '한식';
    }
    if (categoryIndex === 3) {
      return '중식';
    }
    return categoryIndex === 4 ? '아시안' : '양식';
  }

  static getRandomNumber(numbers) {
    return Random.shuffle(numbers)[0];
  }
}
module.exports = MenuPicker;
