const { Random } = require('@woowacourse/mission-utils');
const Category = require('./Category');
const Menus = require('./Menus');

class Recommendation {
  constructor(recommendResult, unlikeMenus) {
    this.recommendMenus = recommendResult;
    this.unlikeMenus = unlikeMenus;
    this.menus = new Menus();
    this.category = new Category();
    this.categoryCount = { 일식: 0, 한식: 0, 중식: 0, 아시안: 0, 양식: 0 };
  }

  get() {
    return [this.recommendMenus, this.category.selectedCategory];
  }

  recommend() {
    const category = this.getCategory();
    this.category.push(category);

    for (let i = 0; i < this.recommendMenus.length; i++) {
      const recommendMenu = this.recommendMenus[i];
      const unlikeMenu = this.unlikeMenus[i];
      this.recommendMenus[i] = this.selectMenu(category, recommendMenu, unlikeMenu);
    }
  }

  getCategory() {
    while (true) {
      const category = this.category.get(Random.pickNumberInRange(1, 5));

      if (this.categoryCount[category] < 2) {
        this.categoryCount[category] += 1;
        return category;
      }
    }
  }

  selectMenu(category, recommendMenu, unlikeMenu) {
    const menus = this.menus.get(category).split(', ');
    const menusIndex = menus.map((menu, index) => index);

    while (true) {
      const menuIndex = Random.shuffle(menusIndex)[0];

      if (!(unlikeMenu.includes(menus[menuIndex]) || recommendMenu.includes(menus[menuIndex]))) {
        recommendMenu.push(menus[menuIndex]);
        break;
      }
    }

    return recommendMenu;
  }
}

module.exports = Recommendation;
