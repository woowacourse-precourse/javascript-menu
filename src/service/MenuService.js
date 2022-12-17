const Coach = require('../models/Coach');

class MenuService {
  #coaches;

  constructor() {
    this.#coaches = {};
  }

  addCoaches(names) {
    names.forEach((name) => (this.#coaches[name] = new Coach(name)));
  }

  getCoachesName() {
    return Object.keys(this.#coaches);
  }
}

module.exports = MenuService;
