const { Random } = require("@woowacourse/mission-utils");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

const s = {
  1: "2,3,4,5,6",
  2: "a,b,c,d,e",
  3: "f,g,h,i",
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
    let rcmCategory = [];
    let i = 0;
    while (i < 5) {
      const category = categories[Random.pickNumberInRange(1, 5) - 1];
      if (i == 0) {
        rcmCategory.push(category);
        i += 1;
      }
      if (i > 0 && this.checkDuplicateCategory(rcmCategory, category)) {
        rcmCategory.push(category);
        i += 1;
      }
    }
    this.#categories = rcmCategory;
    this.#result = this.makeRcmDishes();
  }

  checkDuplicateCategory(rcmCategory, category) {
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

  checkRcmDishes(idx) {
    let menu = [];
    let day = 0;
    while (day < 5) {
      const dishes = SAMPLE[this.#categories[day]].split(", ");
      const dish = dishes[Random.pickNumberInRange(1, dishes.length) - 1];
      if (
        this.checkHateDish(idx, dish) &&
        this.checkDuplicatedDish(menu, dish)
      ) {
        menu.push(dish);
        day += 1;
      }
    }
    return menu;
  }

  checkDuplicatedDish(menu, dish) {
    if (menu.length == 0) return true;
    if (menu.length > 0 && menu.includes(dish)) return false;
    return true;
  }

  checkHateDish(idx, dish) {
    if (this.#hates[idx].includes(dish)) return false;
    return true;
  }

  getResult() {
    return this.#result;
  }
}
module.exports = Recommend;
