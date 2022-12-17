const Random = require('../utils/Random');
const { FOOD } = require('../constants/values');

class Menu {
  #data;

  constructor() {
    this.init();
  }

  init() {
    this.#data = {
      selected: '',
      history: Array.from({ length: 5 }, () => ''),
    };
  }

  generate(names, hateMenus, categoryHistory) {
    let i = 0;
    const coach = [];

    while (i < names.length) {
      const menus = this.#generateMenuList(i, categoryHistory, hateMenus);
      coach.push(menus);
      i += 1;
    }

    return coach;
  }

  #generateMenuList(i, categoryHistory, hateMenus) {
    const menus = [];
    let j = 0;

    while (j < 5) {
      const num = Random.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8])[0];
      const selected = FOOD.data[categoryHistory[j]][num];
      if (this.#checkMenu(selected, hateMenus, i)) {
        menus.push(selected);
        j += 1;
      }
    }

    return menus;
  }

  #checkMenu(selected, hateMenus, i) {
    if (hateMenus[i].includes(selected)) {
      return false;
    }

    if (this.#data.history.includes(selected)) {
      return false;
    }

    return true;
  }
}

module.exports = Menu;
