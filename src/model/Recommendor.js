const CategoryMaker = require('../CategoryMaker');
const RandomShuffler = require('../RandomShuffler');
const { CATEGORY_LENGTH, ZERO } = require('../utils/constants');

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

  getCategories() {
    return this.#categories;
  }

  setAllMenus(SAMPLE) {
    let array = [];

    Object.keys(SAMPLE).forEach((menu) => {
      array.push(SAMPLE[menu].split(', '));
    });

    this.#allMenus = array;
  }

  recommendMenus() {
    this.#coaches.forEach((coach, index) => {
      let recommendedMenusPerCoach = [];

      while (recommendedMenusPerCoach.length !== CATEGORY_LENGTH) {
        const MENU_ORDER = RandomShuffler.shuffle() - 1;
        // console.log(this.#categories[recommendedMenusPerCoach.length]);
        // console.log(this.#allMenus[0][1]);
        let category =
          Number(this.#categories[recommendedMenusPerCoach.length]) - 1;

        // 메뉴를 못 먹는 경우 다시 shuffle
        if (
          this.#hateMenus[index].length !== ZERO &&
          this.#hateMenus[index].includes(this.#allMenus[category][MENU_ORDER])
        ) {
          continue;
        }

        // 메뉴 오더가 중복되는 경우 다시 shuffle
        if (
          recommendedMenusPerCoach.length !== ZERO &&
          recommendedMenusPerCoach.includes(
            this.#allMenus[category][MENU_ORDER]
          )
        ) {
          continue;
        }

        recommendedMenusPerCoach.push(this.#allMenus[category][MENU_ORDER]);
      }

      this.#recommendedMenus.push(recommendedMenusPerCoach);
    });
  }

  getRecommendedMenus() {
    return this.#recommendedMenus;
  }
}

module.exports = Recommendor;
