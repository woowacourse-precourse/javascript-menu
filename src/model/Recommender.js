const Coach = require('./Coach');
const categoySelector = require('../utils/categorySelector');
const menuSelector = require('../utils/menuSelector');
const Category = require('./Category');
const Menu = require('./Menu');
const RULE = require('../constants/rule.constants');

class Recommender {
  /**
   *
   * @param {Category[]} categories
   */
  constructor(categories) {
    this.categories = categories;
  }

  /**
   *
   * @param {Coach} Caoch
   */
  recommendCategory(Caoch) {
    const categoryName = categoySelector();
    if (Caoch.howManyAte(categoryName) >= RULE.MAX_CATEGORY_ATE) {
      return this.recommendCategory(Coach);
    }
    const [selectedCategory] = this.categories
      .filter((category) => category.getName() === categoryName);
    return selectedCategory;
  }

  /**
   *
   * @param {Coach} coach
   * @param {Category} category
   * @return {Menu} menu
   */
  recommendMenu(coach, category) {
    const SelectedMenuName = menuSelector(category.getMenus());
    if (coach.isHate(SelectedMenuName)
    ) {
      return this.recommendMenu(coach, category);
    }
    return SelectedMenuName;
  }
}

module.exports = Recommender;
