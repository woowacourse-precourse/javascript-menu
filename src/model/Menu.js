const { Random } = require('@woowacourse/mission-utils');
const { FOOD } = require('../settings');

class Menu {
  static recommend(recommendedCategory, shuffle) {
    const menus = Menu.getMenus(recommendedCategory);
    const menuIndexes = menus.map((_, index) => index);

    const shuffledMenus = shuffle(menuIndexes).map((menuIndex) => menus[menuIndex]);
    const recommendedMenu = shuffledMenus[0];

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

Menu.recommend('일식', Random.shuffle);

module.exports = Menu;
