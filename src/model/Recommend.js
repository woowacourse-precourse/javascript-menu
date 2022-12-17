const { Random } = require("@woowacourse/mission-utils");
const { MAX, DAYS, MIN } = require("../constants/constants");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

class Recommend {
  #coaches;
  #hates;
  #categories;
  #result;
  constructor(coaches, hates) {
    this.#coaches = coaches;
    this.#hates = hates;
    this.makeRecommendCategory();
  }

  makeRecommendCategory() {
    let categories = Object.keys(SAMPLE);
    let rcmCategory = new Array(1).fill(0);
    this.makeRandomCategory(categories, rcmCategory);
    this.#categories = rcmCategory;
    this.#result = this.makeRcmDishes();
  }

  makeRandomCategory(categories, rcmCategory) {
    let dayIdx = 0;
    while (dayIdx < DAYS) {
      const category = categories[Random.pickNumberInRange(MIN, MAX) - 1];
      if (dayIdx > 0 && this.isDuplicateCategory(rcmCategory, category)) {
        dayIdx = this.addCategory(rcmCategory, category, dayIdx);
      }
      if (dayIdx == 0) {
        dayIdx = this.addCategory(rcmCategory, category, dayIdx);
      }
    }
  }

  addCategory(rcmCategory, category, dayIdx) {
    rcmCategory.push(category);
    return (dayIdx += 1);
  }

  isDuplicateCategory(rcmCategory, category) {
    return rcmCategory.indexOf(category) != rcmCategory.lastIndexOf(category)
      ? false
      : true;
  }

  makeRcmDishes() {
    let rcmDishes = [];
    this.#coaches.forEach((coach, idx) => {
      rcmDishes.push([coach]);
      rcmDishes[idx].push(this.checkRcmDishes(idx));
    });

    return rcmDishes;
  }

  checkRcmDishes(coachIdx) {
    let menu = [];
    let idx_menu = [];
    this.makeIdxMenu(idx_menu);
    this.makeCoachesMenu(coachIdx, menu, idx_menu);
    return menu;
  }

  makeIdxMenu(idx_menu) {
    for (let i = 1; i <= MAX; i++) {
      idx_menu.push(i);
    }
  }

  makeCoachesMenu(coachIdx, menu, idx_menu) {
    let day = 1;
    while (day <= DAYS) {
      const dishes = SAMPLE[this.#categories[day]].split(", ");
      const dish = dishes[Random.shuffle(idx_menu)[0] - 1];
      if (this.isHateDish(coachIdx, dish) && this.isDuplicateDish(menu, dish)) {
        menu.push(dish);
        day += 1;
      }
    }
  }

  isDuplicateDish(menu, dish) {
    if (menu.length == 0) return true;
    if (menu.length > 0 && menu.includes(dish)) return false;
    return true;
  }

  isHateDish(coachIdx, dish) {
    if (this.#hates[coachIdx].includes(dish)) return false;
    return true;
  }

  getResult() {
    return [this.#categories, this.#result];
  }
}
module.exports = Recommend;
