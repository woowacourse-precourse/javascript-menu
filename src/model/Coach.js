const Utils = require('../utils/Utils');

class Coach {
  #name;

  #cantEatMenus;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setCantEatMenu(menus) {
    const cantEatMenusArr = Utils.divideString(menus);
    this.#cantEatMenus = cantEatMenusArr;
  }
}

module.exports = Coach;
