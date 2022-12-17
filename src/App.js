const OutputUI = require('./view/OutputUI');
const InputUI = require('./view/InputUI');
const Vaildator = require('./util/vaildator');
const Coach = require('./Coach');
const InputProcessor = require('./util/InputProcessor');
const Food = require('./Food');
const MenuUtil = require('./util/menuUtil');
const { Random } = require('@woowacourse/mission-utils');
const categoryTable = require('./constant/categoryTable');
const MENUS = require('./constant/menus');

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
    this.output.print('점심 메뉴 추천을 시작합니다.');
    this.input.readLine(
      this.inputCoachs.bind(this),
      '코치의 이름을 입력해 주세요. (, 로 구분)'
    );
  }

  inputCoachs(input) {
    const coachNames = InputProcessor.parseCommaStringsToArray(input);

    if (!coachNames.every(Vaildator.isVaildNameLength)) {
      // 에러 처리
    }

    if (!Vaildator.isVaildCoachNumber(coachNames)) {
      // 에러 처리
    }

    coachNames.forEach((coachname) => {
      this.coachs.push(new Coach(coachname));
    });
    this.inputCoachsDislikeFood();
  }

  inputCoachsDislikeFood() {
    if (this.dislikeIdx > this.coachs.length - 1) {
      for (let i = 0; i < 5; i++) {
        this.selectMenuByDay();
      }
      this.showResult();
      return;
    }
    this.input.readLine(
      this.inputDislikeFoodByCoach.bind(this),
      `${this.coachs[this.dislikeIdx].name}(이)가 못 먹는 메뉴를 입력해 주세요.`
    );
  }

  inputDislikeFoodByCoach(input) {
    const inputFoods = InputProcessor.parseCommaStringsToArray(input);

    // 개수가 올바른지 판단하기

    // 올바르다면
    inputFoods.forEach((food) => {
      const category = MenuUtil.findCategoryByFoodName(food);
      this.coachs[this.dislikeIdx].dislikeFoods.push(new Food(food, category));
    });

    this.dislikeIdx++;
    this.inputCoachsDislikeFood();
  }

  selectMenuByDay() {
    const categoryNumber = this.selectCategory();
    const category = categoryTable[categoryNumber];
    // 카테고리 음식 전체 구해오기
    const [...foodList] = MENUS[category];
    this.recommendCategory.push(category);
    this.coachs.forEach((coach) => {
      const recommendedMenu = this.recommendByCoach(foodList, coach);
      coach.ateFoods.push(new Food(recommendedMenu, category));
    });
    return;
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

  recommendByCoach(foodList, coach) {
    const [...totalFoodList] = foodList;
    console.log(totalFoodList);
    let selectFood = Random.shuffle(totalFoodList)[0];
    while (true) {
      if (coach.dislikeFoods.some((food) => food.name === selectFood)) {
        selectFood = Random.shuffle(totalFoodList)[0];
        continue;
      }
      if (coach.ateFoods.some((food) => food.name === selectFood)) {
        selectFood = Random.shuffle(totalFoodList)[0];
        continue;
      }
      break;
    }
    return selectFood;
  }

  showResult() {
    this.output.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    this.output.print(this.makeCategoryResult());
    this.printByCoachs();
    this.output.print('추천을 완료했습니다.');
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
        result += `| ${food} `;
      });
      result += ']';
      this.output.print(result);
    });
  }
}

module.exports = App;
