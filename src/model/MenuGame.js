const CategoryRandomGenerator = require('../utils/CategoryRandomGenerator');
const MenuRandomGenerator = require('../utils/MenuRandomGenerator');

class MenuGame {
  #coaches;
  #weeklyCategory;

  constructor() {
    this.#coaches = {};
    this.#weeklyCategory = { 일식: 0, 한식: 0, 중식: 0, 아시안: 0, 양식: 0, plan: [] };
  }

  setCoaches(coaches) {
    coaches.split(',').forEach(name => {
      this.#coaches[name] = { hateMenu: [], weeklyMenu: [] };
    });
  }

  getCoaches() {
    return this.#coaches;
  }

  addCoachesHateMenus(name, menus) {
    menus.forEach(menu => {
      if (menu !== '') {
        this.#coaches[name].hateMenu.push(menu);
      }
    });
  }

  decideWeeklyCategoty() {
    while (this.#weeklyCategory.plan.length < 5) {
      let category = CategoryRandomGenerator.generate();
      while (this.#weeklyCategory[category] >= 2) category = CategoryRandomGenerator.generate();

      this.#weeklyCategory[category] += 1;
      this.#weeklyCategory.plan.push(category);
    }
  }

  decideWeeklyMenu() {
    Object.keys(this.#coaches).forEach(name => {
      this.#weeklyCategory.plan.forEach(category => {
        this.selectCoachDailyMenu(category, name);
      });
    });
  }

  selectCoachDailyMenu(category, name) {
    while (this.addCoachMenu(name, MenuRandomGenerator.generate(category)) === false);
  }

  addCoachMenu(name, menu) {
    if (
      this.#coaches[name].weeklyMenu.includes(menu) ||
      this.#coaches[name].hateMenu.includes(menu)
    )
      return false;

    this.#coaches[name].weeklyMenu.push(menu);
    return true;
  }

  getCategoryPlan() {
    return this.#weeklyCategory.plan;
  }
}

module.exports = MenuGame;
