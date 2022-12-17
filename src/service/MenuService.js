const Coach = require('../models/Coach');
const Recommend = require('../models/Recommend');

class MenuService {
  #coaches;

  #recommend;

  constructor() {
    this.#coaches = {};
    this.#recommend = new Recommend();
  }

  addCoaches(names) {
    names.forEach((name) => (this.#coaches[name] = new Coach(name)));
  }

  addNonEdibleMenus(coachName, menus) {
    this.#coaches[coachName].setNonEdibleMenus(menus);
  }

  getRecommendMenuResult() {
    const randomCategory = this.#recommend.getRandomCategory();

    this.#recommendMenu(randomCategory);
  }

  #recommendMenu(category) {
    Object.keys(this.#coaches).forEach((coachName) => {
      const { nonEdibleMenu, menus } = this.#coaches[coachName].getCoachLog();
      const menu = this.#getRecommendMenu(category, nonEdibleMenu, menus);
    });
  }

  #getRecommendMenu(category, nonEdibleMenu, menus) {
    const randomMenu = this.#recommend.getRandomMenu(category);
    if (nonEdibleMenu.includes(randomMenu) || menus.includes(randomMenu)) {
      return this.#getRecommendMenu(category, nonEdibleMenu, menus);
    }

    return randomMenu;
  }
}

module.exports = MenuService;
