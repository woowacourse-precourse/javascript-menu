const { Random } = require('@woowacourse/mission-utils');
const { SERVICE_SETTINGS, MENUS_FOR_EACH_CATEGORIES } = require('../constant/ServiceSettings');

class RecommendationService {
  #coaches = [];
  #menu = [];
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
    this.#menu = Array.from({ length: size });
  }

  setMenuForEachCoah(menus, index) {
    this.#menu[index] = menus;
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
    const DAY_INDEX = {
      0: 'Mon',
      1: 'Tue',
      2: 'Wed',
      3: 'Thu',
      4: 'Fri',
    };

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

  randomChoiceMenuInCategory(category) {
    const menus = MENUS_FOR_EACH_CATEGORIES[category].split(', ');
    const menusIndex = Array.from({ length: menus.length }).map((value, index) => index);
    const choiceIndex = Random.shuffle(menusIndex)[0];
    return menus[choiceIndex];
  }
}

module.exports = RecommendationService;
