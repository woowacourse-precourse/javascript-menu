const CategoryMaker = require('../CategoryMaker');
const RandomShuffler = require('../RandomShuffler');

class Recommendor {
  #coaches = [];
  #hateMenus = [];
  #categories = [];
  #allMenus = [];
  #recommendedMenus = [];

  setCoaches(coaches) {
    this.#coaches = coaches;
  }

  getCoaches() {
    return this.#coaches;
  }

  setHateMenuLists(menus) {
    this.#hateMenus.push(menus);
  }

  setCategories() {
    this.#categories = CategoryMaker.makeCategory();
    return this.#categories;
  }

  setAllMenus(SAMPLE) {
    let array = [];

    Object.keys(SAMPLE).forEach((menu) => {
      array.push(SAMPLE[menu].split(', '));
    });

    this.#allMenus = array;
  }

  recommendMenus(SAMPLE) {
    this.setAllMenus(SAMPLE);

    this.#categories.forEach((category) => {
      const MENU_ORDER = RandomShuffler.shuffle();
      // console.log(this.#allMenus[category - 1][MENU_ORDER]);
    });
  }
}

module.exports = Recommendor;
