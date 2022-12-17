const Utils = require('../utils/Utils');

class Coach {
  #name;

  #cantEatMenus;

  #recommended;

  constructor(name) {
    this.#name = name;
    this.#recommended = [];
    this.#cantEatMenus = [];
  }

  getName() {
    return this.#name;
  }

  setCantEatMenu(menus) {
    const cantEatMenusArr = Utils.divideString(menus);
    this.#cantEatMenus = cantEatMenusArr;
  }

  checkCanEatMenu(menu) {
    if (this.#cantEatMenus.includes(menu)) return false;
    return true;
  }

  checkNotRepeatMenu(menu) {
    if (this.#recommended.includes(menu)) return false;
    return true;
  }

  setRecommended(menu) {
    this.#recommended.push(menu);
  }

  getRecommended() {
    return this.#recommended;
  }
}

module.exports = Coach;
