const { Console, Random } = require('@woowacourse/mission-utils');
const {
  START_MESSAGE,
  NOT_EAT_MENU,
  COMPLETE_MESSAGE,
} = require('./Constants');
const {
  checkValidateCoach,
  checkValidateCoachNames,
  checkMenu,
} = require('./Validate');
const { readCoachName } = require('./InputView');
const { printDay, printCategories, printMenus } = require('./OutputView');
const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안:
    '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

class App {
  constructor() {
    this.step = 0;
    this.coachNotEatMenu = {};
  }

  play() {
    Console.print(START_MESSAGE);
    this.getCoachName();
  }

  getCoachName() {
    readCoachName(coachName => {
      this.changeCoachNameToArray(coachName);
    });
  }

  changeCoachNameToArray(coachNames) {
    const nameSplit = coachNames.split(',');
    this.nameArray = Array.from(nameSplit);
    this.nameArrayLength = this.nameArray.length;

    this.validateCoachName(this.nameArray);
  }

  validateCoachName(nameArray) {
    try {
      checkValidateCoach(nameArray);
      checkValidateCoachNames(nameArray);
      this.moveName();
    } catch (error) {
      Console.print(error);
      this.getCoachName();
    }
  }

  moveName() {
    if (this.step === this.nameArrayLength) {
      this.test();
    } else {
      this.getInputNotEatMenu(this.nameArray[this.step]);
    }
  }

  getInputNotEatMenu(name) {
    Console.readLine(NOT_EAT_MENU(name), menus => {
      this.step += 1;
      const menuSplit = menus.split(',');
      this.menuArray = Array.from(menuSplit);
      this.menu = menus.split(',').join();
      this.makeNotEatMenuObject(name, this.menu);
      this.validateMenu(this.menuArray);
      this.moveName();
    });
  }

  validateMenu(menus) {
    try {
      checkMenu(menus);
    } catch (error) {
      Console.print(error);
      this.step -= 1;
      this.moveName();
    }
  }

  makeNotEatMenuObject(name, menu) {
    this.coachNotEatMenu[name] = menu;
  }

  test() {
    this.getResult();
    // console.log(this.coachNotEatMenu);
    // console.log(Object.values(this.coachNotEatMenu));
  }

  getCategories() {
    this.categoriesNumber = Random.pickNumberInRange(1, 5);
    this.category = Object.keys(SAMPLE)[this.categoriesNumber];
    this.getMenu();
  }

  getMenu() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 8, 8);
    const menuNumber = Random.shuffle(randomNumber)[0];

    const real = Object.values(SAMPLE)[this.categoriesNumber];
    const pickMenu = real.split(',')[menuNumber];
  }

  getResult() {
    printDay();
    // printCategories();
    // printMenus();
    this.finish();
  }

  finish() {
    Console.print(COMPLETE_MESSAGE);
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
