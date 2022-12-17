const { Random } = require('@woowacourse/mission-utils');

const OutputUI = require('./view/OutputUI');
const InputUI = require('./view/InputUI');
const Coach = require('./model/Coach');
const InputProcessor = require('./util/InputProcessor');
const Food = require('./model/Food');
const MenuUtil = require('./util/menuUtil');
const CATEGORY_TABLE = require('./constant/categoryTable');
const MENUS = require('./constant/menus');
const { checkValid, checkEveryVaild } = require('./util/ErrorChecker');
const {
  isValidCoachNumber,
  isValidDislikeFoodsLength,
  isValidNameLength,
} = require('./util/Validator');
const { ERROR, INFO } = require('./constant/message');

class App {
  constructor() {
    this.output = new OutputUI();
    this.input = new InputUI();
    this.coachs = [];
    this.dislikeIdx = 0;
    this.recommendCategory = [];
    this.categoryCounts = [0, 0, 0, 0, 0, 0];
  }

  play() {
    this.output.print(INFO.START);
    this.input.readLine(this.inputCoachs.bind(this));
  }

  inputCoachs(input) {
    const coachNames = InputProcessor.parseCommaStringsToArray(input);

    try {
      checkValid(coachNames, isValidCoachNumber, ERROR.OUT_RANGE);
      checkEveryVaild(coachNames, isValidNameLength, ERROR.NOT_VALID);
    } catch (error) {
      this.output.print(error.message);
      this.input.readLine(this.inputCoachs.bind(this));
    }

    coachNames.forEach((coachname) => {
      this.coachs.push(new Coach(coachname));
    });
    this.inputCoachsDislikeFood();
  }

  inputCoachsDislikeFood() {
    if (this.dislikeIdx > this.coachs.length - 1) {
      for (let i = 0; i < 5; i++) {
        this.calcRecommendedList();
      }
      this.coachs.forEach((coach) => {
        this.recommendCategory.forEach((category) => {
          this.selectMenuByCategory(category, coach);
        });
      });
      this.showResult();
      return;
    }
    this.input.readLine(this.inputDislikeFoodByCoach.bind(this));
  }

  inputDislikeFoodByCoach(input) {
    const inputFoods = InputProcessor.parseCommaStringsToArray(input);

    // 개수가 올바른지 판단하기
    try {
      checkValid(inputFoods, isValidDislikeFoodsLength, ERROR.NOT_VALID);
    } catch (error) {
      this.output.print(error.message);
      this.inputCoachsDislikeFood();
    }
    // 올바르다면
    inputFoods.forEach((food) => {
      const category = MenuUtil.findCategoryByFoodName(food);
      this.coachs[this.dislikeIdx].dislikeFoods.push(new Food(food, category));
    });

    this.dislikeIdx++;
    this.inputCoachsDislikeFood();
  }

  selectMenuByCategory(category, coach) {
    // 카테고리 음식 전체 구해오기
    const [...foodList] = MENUS[category];
    const recommendedMenu = this.recommendByCoach(foodList, coach);
    coach.ateFoods.push(new Food(recommendedMenu, category));
  }

  selectCategory() {
    while (true) {
      const category = Random.pickNumberInRange(1, 5);
      if (!this.categoryCounts[category] <= 2) {
        this.categoryCounts[category]++;
        return category;
      }
    }
  }
  calcRecommendedList() {
    const categoryNumber = this.selectCategory();
    const category = CATEGORY_TABLE[categoryNumber];
    this.recommendCategory.push(category);
  }

  recommendByCoach(foodList, coach) {
    let selectFoodIdx = Random.shuffle(foodList)[0];
    selectFoodIdx -= 1;
    while (true) {
      if (
        coach.dislikeFoods.some((food) => food.name === foodList[selectFoodIdx])
      ) {
        selectFoodIdx = Random.shuffle(foodList)[0];
        continue;
      }
      if (
        coach.ateFoods.some((food) => food.name === foodList[selectFoodIdx])
      ) {
        selectFoodIdx = Random.shuffle(foodList)[0];
        continue;
      }
      break;
    }
    return foodList[selectFoodIdx];
  }

  showResult() {
    this.output.print(INFO.RESULT_TITLE);
    this.output.print(INFO.RESULT_DAY);
    this.output.print(this.makeCategoryResult());
    this.printByCoachs();
    this.output.print(INFO.FINISH);
  }

  makeCategoryResult() {
    let result = '[ 카테고리 ';
    this.recommendCategory.forEach((category) => {
      result += `| ${category} `;
    });
    result += ']';
    return result;
  }

  printByCoachs() {
    this.coachs.forEach((coach) => {
      let result = `[ ${coach.name} `;
      coach.ateFoods.forEach((food) => {
        result += `| ${food.name} `;
      });
      result += ']';
      this.output.print(result);
    });
  }
}

module.exports = App;
