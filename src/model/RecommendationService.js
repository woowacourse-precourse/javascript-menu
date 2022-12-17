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

  choiceCategoryForEachDay(day) {
    const category = this.randomChoiceCategory();
    this.#categoryForEachDay[day] = category;
    const menu = this.randomChoiceMenuInCategory(category);
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
