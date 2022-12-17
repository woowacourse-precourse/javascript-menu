const { Random } = require('@woowacourse/mission-utils');
const { FOOD } = require('../settings');

class Menu {
  static recommend(recommendedCategory) {
    const menus = Menu.getMenus(recommendedCategory);
    const menuIndexes = menus.map((_, index) => index);
    const shuffledIndexes = Random.shuffle(menuIndexes);
    const recommendedMenu = shuffledIndexes?.map((menuIndex) => menus[menuIndex])[0];

    return recommendedMenu;
  }

  static getMenus(recommendedCategory) {
    const food = Object.entries(FOOD).map(([category, menus]) => ({
      category,
      menus: menus.split(', '),
    }));

    const { menus } = food.find(({ category }) => category === recommendedCategory);
    return menus;
  }
}

module.exports = Menu;
