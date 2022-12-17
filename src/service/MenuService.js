const Coach = require('../models/Coach');

class MenuService {
  #coaches;

  constructor() {
    this.#coaches = {};
  }

  addCoaches(names) {
    names.forEach((name) => (this.#coaches[name] = new Coach(name)));
  }

  addNonEdibleMenus(coachName, menus) {
    this.#coaches[coachName].setNonEdibleMenus(menus);
  }

  getCoachesName() {
    return Object.keys(this.#coaches);
  }
}

module.exports = MenuService;
