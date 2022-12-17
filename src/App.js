const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const InputView = require('./InputView');
const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안:
    '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

class App {
  #coachNameArray;
  #categoriesArray;

  constructor() {
    this.#coachNameArray = [];
    this.#categoriesArray = [];
  }

  printGameStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  }

  play() {
    this.printGameStart();
    this.#coachNameArray = InputView.getCoachNameArray();

    for (let i = 0; i < this.#coachNameArray.length; i++) {
      let coachCannotEatFoodArray = InputView.getCoachCannotEatFoodsArray(
        this.#coachNameArray[i]
      );

      for (let j = 0; j < coachCannotEatFoodArray.length; j++) {
        this.#coachNameArray[i] += `+${coachCannotEatFoodArray[j]}`;
      }
    }

    this.makeCategoriesArray();

    console.log(this.#categoriesArray);
  }

  makeCategoriesArray() {
    do {
      const categoryRandom = Random.pickNumberInRange(1, 5);
      let duplicationCount = this.#categoriesArray.filter(
        element => categoryRandom === element
      ).length;
      if (duplicationCount <= 2) this.#categoriesArray.push(categoryRandom);
      else this.makeCategoriesArray();
    } while (this.#categoriesArray.length < 5);
  }
}

module.exports = App;
