const CategoryMaker = require('./CategoryMaker');
const MenuMaker = require('./MenuMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { validateCoachName, validateDislikeMenu } = require('./utils/validate');
const { Random } = require('@woowacourse/mission-utils');
const { convertCategory, combineCoachMenu } = require('./utils/menuUtil');
const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

class App {
  constructor() {
    this.coach = null;
    this.category = null;
    this.dislikeMenu = {};
    this.recommendMenu = [];
  }

  play() {
    OutputView.printStart();
    InputView.readCoachName(this.getCoachNameInput.bind(this));
  }

  getCoachNameInput(name) {
    this.coach = name.split(',');
    validateCoachName(this.coach);
    this.category = CategoryMaker.createCategory();
    InputView.readDislikeMenu(this.coach[0], 0, this.getDislikeMenuInput.bind(this));
  }

  getDislikeMenuInput(menu, idx) {
    const dislikeMenu = menu.split(',');
    validateDislikeMenu(dislikeMenu);
    this.getMenuRecommendation(dislikeMenu);

    idx++;
    if (idx === this.coach.length) {
      const convertedCategory = convertCategory(this.category);
      const combinedCoachMenu = combineCoachMenu(this.coach, this.recommendMenu);
      OutputView.printResult(convertedCategory, combinedCoachMenu);
      return;
    }
    InputView.readDislikeMenu(this.coach[idx], idx, this.getDislikeMenuInput.bind(this));
  }

  getMenuRecommendation(dislikeMenu) {
    const menuMaker = new MenuMaker(this.category, dislikeMenu);
    const weekMenu = menuMaker.createMenu();
    this.recommendMenu.push(weekMenu);
  }
}

const app = new App();
app.play();

module.exports = App;
