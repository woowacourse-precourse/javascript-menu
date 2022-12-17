const { Random } = require('@woowacourse/mission-utils');
const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};
// Random.pickNumberInRange()

class MenuPicker {
  #category;
  constructor() {
    // Array.from({ length: 5 });
    this.#category = [];
  }

  weekPick() {
    while (this.#category.length < 5) {
      this.addCategory();
      this.checkRepeated();
    }
  }

  checkRepeated() {
    const sumMenu = this.#category.reduce((categorySum, today) => {
      categorySum[today] = (categorySum[today] || 0) + 1;
      return categorySum;
    }, {});
    const countMenu = Object.values(sumMenu);
    if (countMenu.filter((count) => count >= 3).length !== 0) {
      this.#category.pop();
      this.addCategory();
    }
    return sumMenu;
  }

  addCategory() {
    this.#category.push(this.pickCategory());
  }

  pickCategory() {
    const foodType = Object.keys(SAMPLE);
    return Random.pickNumberInRange(0, foodType.length);
  }
}

module.exports = MenuPicker;
