const MissionUtils = require('@woowacourse/mission-utils');

class MenuMachine {
  #result;
  #allergies;
  #days;
  #categories;
  #menu;
  resultCategory = [];

  constructor(coachName, menu) {
    this.#allergies = new Map();
    for (const name of coachName) {
      this.#allergies.set(name, []);
    }
    this.#result = menu;
    this.#menu = {};
    this.#days = ['월요일', '화요일', '수요일', '목요일', '금요일'];
    this.#categories = ['일식', '한식', '중식', '아시안', '양식'];
  }

  setAllergies(coachName, allergies) {
    for (const allergy of allergies) {
      this.#allergies.get(coachName).push(allergy);
    }
  }
  checkTwice(category) {
    let cnt = 0;
    Object.values(this.#menu).forEach(value => {
      if (value === category) {
        cnt++;
      }
    });
    if (cnt > 2) {
      return false;
    }
    return true;
  }

  //generateWeeklyRecommendations not
  recommendMenu() {
    for (const day of this.#days) {
      let category = this.#categories[MissionUtils.Random.pickNumberInRange(1, 5) - 1];
      while (!this.checkTwice(category)) {
        category = this.#categories[MissionUtils.Random.pickNumberInRange(1, 5) - 1];
      }
      this.#menu[day] = category;
      this.resultCategory.push(category);
    }
    for (const [coach, restrictions] of this.#allergies) {
      //console.log(coach, restrictions);
      const arr = [];
      for (const day in this.#menu) {
        let recommendations = this.#allergies.get(coach).filter(recommendation => !restrictions.includes(recommendation) && !Object.values(this.#menu).includes(recommendation));
        this.#menu[day] = recommendations[0];
      }
    }
  }
}
module.exports = MenuMachine;
