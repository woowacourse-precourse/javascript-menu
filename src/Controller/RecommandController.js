const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const Validator = require("../util/Validator");
const CoachNames = require("../model/CoachNames");

class RecommandController {
  coachNames;

  currentCoachName;

  start() {
    OutputView.printStart();

    this.readCoachNamesPhase();
  }

  readCoachNamesPhase() {
    InputView.readCoachNames(this.onReadCoachNames.bind(this));
  }

  onReadCoachNames(coachNames) {
    try {
      Validator.checkReadCoachNames(coachNames);
    } catch (error) {
      OutputView.printError(error.message);
      this.readCoachNamesPhase();
      return;
    }
    this.coachNames = new CoachNames(coachNames.split(","));
    this.readNoEatMenuPhase();
  }

  readNoEatMenuPhase() {
    this.currentCoachName = this.coachNames.getCoachName();
    if (this.currentCoachName === "끝") {
      this.recommandMenuPhase();
    }
    this.eachReadNoEatMenu();
  }

  eachReadNoEatMenu() {
    InputView.readNoEatMenu(
      this.currentCoachName,
      this.onReadNoEatMenu.bind(this),
    );
  }

  onReadNoEatMenu(noEatMenus) {
    try {
      Validator.checkReadNoEatMenu(noEatMenus);
    } catch (error) {
      OutputView.printError(error.message);
      this.eachReadNoEatMenu();
      return;
    }
    this.readNoEatMenuPhase();
  }

  recommandMenuPhase() {
    // 메뉴 추천 로직
  }
}

module.exports = RecommandController;
