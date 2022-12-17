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
    this.#recommendMenu();
  }

  #recommendMenu() {
    const randomCategory = this.#recommend.getRandomCategory();
  }

  #getRandomCategory() {}
}

module.exports = MenuService;
