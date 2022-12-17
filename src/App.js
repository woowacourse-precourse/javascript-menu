const Coach = require('./Coach');
const { COMMON_MSG } = require('./Constants');
const { readCoachNames, readFoodNames, readClose } = require('./io/InputView');
const { printStartMessage, printRecommendResult } = require('./io/OutputView');
const { checkCategoryTwice } = require('./utils/Checker');
const { convertNumberToCategory } = require('./utils/Converter');
const { generateRandomNumberBetween1And5 } = require('./utils/Generator');
const {
  validateCoachNameLength,
  validateCoachNameCount,
  validateFoodNameCount,
  validateFoodName,
} = require('./utils/Validator');

const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안:
    '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

class App {
  #coaches;
  #categories;

  constructor() {
    this.#coaches = [];
    this.#categories = [];
  }

  play() {
    printStartMessage();
    this.askCoachNames.call(this);
  }

  askCoachNames() {
    readCoachNames(this.handleCoachNames.bind(this));
  }

  handleCoachNames(input) {
    const coachNames = input.split(COMMON_MSG.comma);
    coachNames.forEach(validateCoachNameLength);
    validateCoachNameCount(coachNames);
    this.askCantFood.call(this, coachNames);
  }

  askCantFood(names, depth = 0) {
    if (depth === names.length) return this.handleCoaches.call(this);
    readFoodNames(this.handleCoachCantFood.bind(this)).call(
      this,
      names[depth],
      names
    );
  }

  handleCoachCantFood(name, names) {
    return (input) => {
      const cantFoods = input.split(COMMON_MSG.comma);
      validateFoodNameCount(cantFoods);
      cantFoods.forEach(validateFoodName);
      this.#coaches.push(new Coach(name, cantFoods));
      this.askCantFood.call(this, names, this.#coaches.length);
    };
  }

  handleCoaches() {
    for (let i = 0; i < 5; i++) {
      const category = generateRandomNumberBetween1And5();
      if (checkCategoryTwice(this.#categories, category)) {
        i--;
        continue;
      }
      this.#coaches.forEach((coach) => coach.recommendFood(category));
      this.#categories.push(convertNumberToCategory(category));
    }
    this.handleResult.call(this);
  }

  handleResult() {
    printRecommendResult(this.#categories, this.#coaches);
    this.exit();
  }

  exit() {
    readClose();
  }
}

module.exports = App;
