const Coach = require('../models/Coach');

class MenuService {
  #coaches;

  constructor() {
    this.#coaches = {};
  }

  addCoaches(names) {
    names.forEach((name) => (this.#coaches[name] = new Coach(name)));
  }
}

module.exports = MenuService;
