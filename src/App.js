const Coach = require("./Coach");
const MenuManager = require("./MenuManager");
const Validator = require("./Validator");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안: "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

class App {
  #menuManager;

  play() {
    OutputView.printOpening();
    this.requestCoachName();
  }

  requestCoachName() {
    InputView.readCoachName((nameInput) => {
      this.handleError(this.registCoachs.bind(this, nameInput), this.requestCoachName.bind(this));
    });
  }

  registCoachs(nameInput) {
    Validator.validateCoachNames(nameInput);
    const coachNameList = nameInput.split(",");
    const coachs = coachNameList.map((name) => new Coach(name));
    this.#menuManager = new MenuManager(coachs);
    this.requestFirstCoachsBannedMenu();
  }

  requestFirstCoachsBannedMenu() {
    const firstCoach = this.#menuManager.getFirstCoach();
    this.requestBannedMenu(firstCoach);
  }

  requestBannedMenu(coach) {
    InputView.readBannedFood(coach.getName(), (menuInput) => {
      this.handleError(this.registBannedMenu.bind(this, coach, menuInput), this.requestBannedMenu.bind(this, coach));
    });
  }

  splitMenu(menuInput) {
    if (menuInput === "") return [];
    return menuInput.split(",");
  }

  registBannedMenu(coach, menuInput) {
    Validator.validateBannedMenu(menuInput);
    const menus = this.splitMenu(menuInput);
    coach.addBannedMenu(menus);

    const nextCoach = this.#menuManager.getNextCoach(coach.getName());
    if (!nextCoach) {
      console.log("wow");
      return;
    }
    this.requestBannedMenu(nextCoach);
  }

  handleError(callback, request) {
    try {
      callback();
    } catch (error) {
      OutputView.printErrorMessage(error);
      request();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
