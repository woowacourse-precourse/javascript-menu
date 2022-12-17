const MissionUtils = require("@woowacourse/mission-utils");
const Coach = require("./domain/Coach");
const MenuManager = require("./domain/MenuManager");
const RandomCategoryGenerator = require("./util/RandomCategoryGenerator");
const { splitMenu, splitCoachName } = require("./util/SplitString");
const Validator = require("./util/Validator");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

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
    const coachNameList = splitCoachName(nameInput);
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

  registBannedMenu(coach, menuInput) {
    Validator.validateBannedMenu(menuInput);
    const menus = splitMenu(menuInput);
    coach.addBannedMenu(menus);

    const nextCoach = this.#menuManager.getNextCoach(coach.getName());
    if (!nextCoach) {
      this.makeRecommendedMenu();
      return;
    }
    this.requestBannedMenu(nextCoach);
  }

  makeRecommendedMenu() {
    const randomCategorys = RandomCategoryGenerator.generateRandomCategorys();
    this.#menuManager.setMenus(randomCategorys);
    const coachsMenus = this.#menuManager.getCoachsMenus();
    OutputView.printRecommendedMenu(randomCategorys, coachsMenus);
    MissionUtils.Console.close();
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
