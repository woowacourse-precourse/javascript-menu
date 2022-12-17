const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};
const { Random } = require('@woowacourse/mission-utils');

class SetFood {
  #coachName;
  #notEatList;
  #categoryList;
  #results = [];
  #foodList;

  constructor(coachNotEatList, categoryList) {
    this.#coachName = coachNotEatList[0];
    this.#notEatList = coachNotEatList[1].split(',');
    this.#categoryList = categoryList;
  }

  foodOfWeak() {
    this.#categoryList.forEach((category) => {
      this.#foodList = this.#makeFoodList(category);
      this.#recommendFood();
    });
    return { coach: this.#coachName, result: this.#results };
  }

  #recommendFood() {
    const recommend = this.#foodList[this.#shuffleNumber() - 1];
    if (this.#isNotEatFood(recommend)) this.#recommendFood();
    else this.#checkDuplicateMenu(recommend);
  }

  #checkDuplicateMenu(recommend) {
    if (this.#results.includes(recommend)) this.#recommendFood();
    if (!this.#results.includes(recommend)) this.#results.push(recommend);
  }

  #makeFoodList(category) {
    const foodList = SAMPLE[category].split(', ');
    return foodList;
  }

  #shuffleNumber() {
    const shuffleList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return Random.shuffle(shuffleList)[0];
  }

  #isNotEatFood(recommend) {
    if (this.#notEatList.includes(recommend)) return true;
    return false;
  }
}

module.exports = SetFood;
