const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

const Coach = require("./model/Coach");
const Menu = require("./model/Menu");

class App {
  #coaches;
  #sequence = 0;
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
    if (this.#sequence < this.#coaches.length) {
      InputView.readUneatableMenu(
        this.#coaches[this.#sequence],
        this.saveUneatableMenu.bind(this)
      );
    }
    if (this.#sequence === this.#coaches.length) {
      this.makeRecommandResult();
    }
  }

  saveUneatableMenu(menus) {
    try {
      this.#menuManager.validate(menus);
      OutputView.printEmptyLine();

      this.#sequence += 1;
      this.readUneatableMenu();
    } catch (error) {
      OutputView.printErrorMessage(error);
      this.readUneatableMenu();
    }
  }

  makeRecommandResult() {
    this.#menuManager.makeRecommandResult();
    const recommandedCategories = this.#menuManager.getRecommandedCategories();

    this.#menuManager.recommandCoachesMenu(this.#coaches);
    const coachData = this.#menuManager.getCoachData();

    this.printResult(recommandedCategories, coachData);
  }

  printResult(recommandedCategories, coachData) {
    OutputView.printResult(recommandedCategories, coachData, this.#coaches);
    OutputView.printEmptyLine();

    this.printCompleteMessage();
  }

  printCompleteMessage() {
    OutputView.printCompleteMessage();

    this.quit();
  }

  quit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
