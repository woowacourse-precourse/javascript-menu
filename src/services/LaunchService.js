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
   * @param {number[]} days
   * @param {Coach[]} coaches
   */
  suggest(days, coaches) {
    const categoryFrequencies = Object.fromEntries(
      this.#categories.map((category) => [category.getId(), 0]),
    );
    return days.map(() => {
      const availableCategories = Object.entries(categoryFrequencies)
        .filter(([, frequency]) => frequency < 2)
        .map(([categoryId]) => this.getCategory(categoryId));

      const { category, suggestions } = this.suggestForCoaches(coaches, availableCategories);
      categoryFrequencies[category.getId()] += 1;
      return suggestions;
    });
  }

  /**
   * @param {Coach[]} coaches
   * @param {Category[]} categories
   * @returns {{ category: Category, suggestions: Suggestion[] }}
   */
  suggestForCoaches(coaches, categories) {
    while (true) {
      const category = this.getRandomCategory();
      if (!categories.includes(category)) continue;
      const suggestions = coaches.map((coach) => {
        const menu = this.suggestForCoach(coach, category);
        if (menu !== null) return new Suggestion(coach, category, menu);
        return null;
      });
      if (suggestions.every((suggestion) => suggestion !== null)) {
        coaches.forEach((coach, index) => coach.addSuggestedMenu(suggestions[index].getMenu()));
        return { category, suggestions };
      }
    }
  }

  /**
   * @param {Coach} coach
   * @param {Category} category
   * @returns {Menu | null}
   */
  suggestForCoach(coach, category) {
    const canSuggest = category
      .getMenus()
      .some((menu) => !coach.isDislikeMenu(menu) && !coach.isSuggestedMenu(menu));
    if (!canSuggest) return null;

    while (true) {
      const menu = Random.shuffle([...category.getMenus()])[0];
      if (!coach.isDislikeMenu(menu) && !coach.isSuggestedMenu(menu)) {
        return menu;
      }
    }
  }
}

module.exports = LaunchService;
