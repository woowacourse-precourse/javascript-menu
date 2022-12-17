/* eslint-disable class-methods-use-this */
const { Random } = require('@woowacourse/mission-utils');
const Category = require('../domains/Category');
const Coach = require('../domains/Coach');
const Menu = require('../domains/Menu');
const Suggestion = require('../domains/Suggestion');

class LaunchService {
  /** @type {Category[]} */
  #categories;

  /**
   * @param {Category[]} categories
   */
  constructor(categories) {
    this.#categories = categories;
  }

  getCategories() {
    return this.#categories;
  }

  /**
   * @param {number} id
   */
  getCategory(id) {
    return this.#categories.find((category) => category.getId() === id) ?? null;
  }

  getMenus() {
    return this.#categories.flatMap((category) => category.getMenus());
  }

  /**
   * @param {string} name
   */
  getCategoryByName(name) {
    return this.#categories.find((category) => category.getName() === name) ?? null;
  }

  /**
   * @returns {Category}
   */
  getRandomCategory() {
    return this.getCategory(Random.pickNumberInRange(1, 5));
  }

  /**
   * @param {string} days
   */
  suggestCategories(days) {
    const categories = [];
    return days.map(() => {
      while (true) {
        const category = this.getRandomCategory();
        const frequency = categories.reduce((count, other) => {
          if (other === category) return count + 1;
          return count;
        }, 0);
        if (frequency < 2) {
          return category;
        }
      }
    });
  }

  /**
   * @param {Coach[]} coaches
   * @param {Category[]} categories
   */
  suggestMenuTable(coaches, categories) {
    return coaches.map((coach) => this.suggestForCoach(coach, categories));
  }

  /**
   * @param {Coach} coach
   * @param {Category[]} categories
   * @returns {Menu[]}
   */
  suggestForCoach(coach, categories) {
    const suggestedMenu = [];
    return categories.map((category) => {
      while (true) {
        const menuIndex = Random.shuffle(category.getMenus().map((menu, index) => index + 1))[0];
        const menu = category.getMenus()[menuIndex - 1];
        if (!coach.isDislikeMenu(menu) && !suggestedMenu.includes(menu)) {
          suggestedMenu.push(menu);
          return menu;
        }
      }
    });
  }
}

module.exports = LaunchService;
