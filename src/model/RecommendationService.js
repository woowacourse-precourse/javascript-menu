const { Random } = require('@woowacourse/mission-utils');
const { check } = require('prettier');
const { MENUS_FOR_EACH_CATEGORIES } = require('../constant/ServiceSettings');
const DAY_INDEX = {
  0: 'Mon',
  1: 'Tue',
  2: 'Wed',
  3: 'Thu',
  4: 'Fri',
};

class RecommendationService {
  #coaches = [];
  #menus = [[], [], [], [], []];
  #excludeMenu = [];
  #categoryForEachDay = {
    Mon: '',
    Tue: '',
    Wed: '',
    Thu: '',
    Fri: '',
  };

  setCoaches(coaches) {
    this.#coaches = coaches;
    this.setMenuLength(coaches.length);
  }

  setMenuLength(size) {
    this.#excludeMenu = Array.from({ length: size });
  }

  setMenuForEachCoah(menus, index) {
    this.#excludeMenu[index] = menus;
  }

  getCoaches() {
    return this.#coaches;
  }

  getMenus() {
    return this.#menus;
  }

  getCategoryForEachDay() {
    return this.#categoryForEachDay;
  }

  choiceCategoryForWeek() {
    const selectedCategories = [this.randomChoiceCategory()];
    while (selectedCategories.length < 5) {
      const category = this.randomChoiceCategory();
      if (this.checkCanChoiceCategory(category, selectedCategories)) {
        selectedCategories.push(category);
      }
    }

    this.assignCategoryForEachDay(selectedCategories);
  }

  assignCategoryForEachDay(categories) {
    for (let index = 0; index < 5; index += 1) {
      const day = DAY_INDEX[index];
      this.#categoryForEachDay[day] = categories[index];
    }
  }

  checkCanChoiceCategory(category, categories) {
    const count = this.calculateCountSameCategory(category, categories);
    return count < 2;
  }

  calculateCountSameCategory(compareCategory, categories) {
    let count = 0;
    categories.forEach((category) => {
      if (category === compareCategory) {
        count += 1;
      }
    });
    return count;
  }

  randomChoiceCategory() {
    const categories = {
      1: '일식',
      2: '한식',
      3: '중식',
      4: '아시안',
      5: '양식',
    };

    return categories[Random.pickNumberInRange(1, 5)];
  }

  choiceMenuForEachCoach(dayIndex) {
    const category = this.#categoryForEachDay[DAY_INDEX[dayIndex]];
    const coachLength = this.#coaches.length;
    for (let coachIndex = 0; coachIndex < coachLength; coachIndex += 1) {
      const menu = this.choiceMenuCanEatInCategory(coachIndex, category);
      this.#menus[coachIndex].push(menu);
    }
  }

  choiceMenuCanEatInCategory(coachIndex, category) {
    while (true) {
      const menu = this.randomChoiceMenuInCategory(category);
      if (this.checkCanEat(coachIndex, menu) && this.checkNotDuplicateMenu(coachIndex, menu)) {
        return menu;
      }
    }
  }

  checkCanEat(coachIndex, menu) {
    return !this.#excludeMenu[coachIndex].includes(menu);
  }

  checkNotDuplicateMenu(coachIndex, menu) {
    const menus = this.#menus[coachIndex];

    if (menus.length === 0) {
      return true;
    }

    return !menus.includes(menu);
  }

  randomChoiceMenuInCategory(category) {
    const menus = MENUS_FOR_EACH_CATEGORIES[category];
    const menuNumebrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const choiceIndex = Random.shuffle(menuNumebrs)[0];
    return menus[choiceIndex];
  }
}

module.exports = RecommendationService;
