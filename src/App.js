const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const InputView = require('./InputView');
const OutputView = require('./OutputView');
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
  #categoriesNameArray;
  #coachFoodRecommendationArray;

  constructor() {
    this.#coachNameArray = [];
    this.#categoriesArray = [];
    this.#categoriesNameArray = [];
    this.#coachFoodRecommendationArray = [];
  }

  play() {
    OutputView.printGameStart();

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

    OutputView.printGameInfoResult();
    OutputView.printWeekInfo();
    OutputView.printCategories(this.#categoriesNameArray);
    OutputView.printRecommendations(this.#coachFoodRecommendationArray);
    OutputView.printGameEnd();
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

    this.makeCategoriesNameArray();
    this.makeCoachFoodRecommendationArray();
  }

  makeCategoriesNameArray() {
    for (let i = 0; i < this.#categoriesArray.length; i++) {
      let categoryName;

      if (this.#categoriesArray[i] == 1) categoryName = '일식';
      if (this.#categoriesArray[i] == 2) categoryName = '한식';
      if (this.#categoriesArray[i] == 3) categoryName = '중식';
      if (this.#categoriesArray[i] == 4) categoryName = '아시안';
      if (this.#categoriesArray[i] == 5) categoryName = '양식';

      this.#categoriesNameArray.push(categoryName);
    }
  }

  makeCoachFoodRecommendationArray() {
    let coachName;
    let coachCannotEat;
    for (let i = 0; i < this.#coachNameArray.length; i++) {
      let coachInfo = this.#coachNameArray[i].split('+');
      for (let j = 0; j < coachInfo.length; j++) {
        if (j == 0) coachName = coachInfo[j];
        else coachCannotEat += ' ' + coachInfo[j];
      }
      this.makeOneCoachRecommendation(coachName, coachCannotEat);
    }
  }

  makeOneCoachRecommendation(coachName, coachCannotEat) {
    let recommendationOneWeek = coachName;

    for (let i = 0; i < this.#categoriesNameArray.length; i++) {
      let temp = 0;
      do {
        let menu;
        let menuNameArray = [];
        let menuName;

        if (this.#categoriesNameArray[i] === '일식') {
          menuNameArray = SAMPLE.일식.split(',');
          menu = Random.shuffle(menuNameArray)[0];
        }

        if (this.#categoriesNameArray[i] === '한식') {
          menuNameArray = SAMPLE.한식.split(',');
          menu = Random.shuffle(menuNameArray)[0];
        }

        if (this.#categoriesNameArray[i] === '중식') {
          menuNameArray = SAMPLE.중식.split(',');
          menu = Random.shuffle(menuNameArray)[0];
        }

        if (this.#categoriesNameArray[i] === '아시안') {
          menuNameArray = SAMPLE.아시안.split(',');
          menu = Random.shuffle(menuNameArray)[0];
        }

        if (this.#categoriesNameArray[i] === '양식') {
          menuNameArray = SAMPLE.양식.split(',');
          menu = Random.shuffle(menuNameArray)[0];
        }

        menuName = menuNameArray[menu - 1];

        if (
          !coachCannotEat.includes(menuName) &&
          !recommendationOneWeek.includes(menuName)
        ) {
          if (menuName.includes(' ')) {
            recommendationOneWeek += ` |${menuName}`;
          } else {
            recommendationOneWeek += ` | ${menuName}`;
          }

          temp = 1;
        } else {
          temp = 0;
        }
      } while (temp == 0);
    }
    this.#coachFoodRecommendationArray.push(recommendationOneWeek);
  }
}

module.exports = App;
