const { Random } = require('@woowacourse/mission-utils');

const MenuRecommender = {
  recommendMenu(menus, exceptFoodList) {
    const recommendMenus = [];
    while (menus.length < 5) {
      const menu = Random.shuffle(menus)[0];
      if (exceptFoodList.includes(menu)) continue;
      menus.push(menu);
    }
    return recommendMenus;
  },
};

module.exports = MenuRecommender;
