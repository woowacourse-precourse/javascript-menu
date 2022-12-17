const OutputUI = require('./view/OutputUI');
const InputUI = require('./view/InputUI');
const Vaildator = require('./util/vaildator');
const Coach = require('./Coach');
const InputProcessor = require('./util/InputProcessor');
const Food = require('./Food');
const MENUS = require('./constant/menus');
const MenuUtil = require('./util/menuUtil');

class App {
  constructor() {
    this.output = new OutputUI();
    this.input = new InputUI();
    this.coachs = [];
    this.dislikeIdx = 0;
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
      // 메뉴 추천 결과 실행 로직
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
}

module.exports = App;
