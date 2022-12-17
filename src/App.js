const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

const Coach = require("./model/Coach");
const Menu = require("./model/Menu");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

class App {
  #coaches;
  #coachIndex = 0;
  #coachesManager;
  #menuManager = new Menu();

  play() {
    this.printStartMessage();
  }

  printStartMessage() {
    OutputView.printStartMessage();

    this.readCoachesName();
  }

  readCoachesName() {
    InputView.readCoachesName(this.divideEachCoach.bind(this));
  }

  divideEachCoach(names) {
    try {
      this.#coachesManager = new Coach(names);
      this.#coaches = this.#coachesManager.getCoaches();

      OutputView.printEmptyLine();

      this.readUneatableMenu();
    } catch (error) {
      OutputView.printErrorMessage(error);

      this.readCoachesName();
    }
  }

  readUneatableMenu() {
    if (this.#coachIndex < this.#coaches.length) {
      InputView.readUneatableMenu(
        this.#coaches[this.#coachIndex],
        this.saveUneatableMenu.bind(this)
      );
    }
    if (this.#coachIndex === this.#coaches.length) {
      this.makeRecommandResult();
    }
  }

  saveUneatableMenu(menus) {
    this.#menuManager.validate(menus);

    OutputView.printEmptyLine();

    this.#coachIndex += 1;
    this.readUneatableMenu();
  }

  makeRecommandResult() {
    this.#menuManager.makeRecommandResult();
  }
}

const app = new App();
app.play();

module.exports = App;
