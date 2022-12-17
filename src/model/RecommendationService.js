const { Random } = require('@woowacourse/mission-utils');
const { SERVICE_SETTINGS } = require('../constant/ServiceSettings');

class RecommendationService {
  #coaches = [];
  #menu = [];
  #menuForEachDay = {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
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
}

module.exports = RecommendationService;
