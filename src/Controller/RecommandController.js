const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const Validator = require("../util/Validator");
const CoachNames = require("../model/CoachNames");
const Recommand = require("../util/Recommand");

class RecommandController {
  coachNames = "class";

  currentCoachName = "string";

  categories = [];

  menusEachCoach = {};

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
      return;
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

    this.setMenusEachCoach(noEatMenus);

    this.readNoEatMenuPhase();
  }

  setMenusEachCoach(noEatMenus) {
    this.menusEachCoach[this.currentCoachName] = {};
    this.menusEachCoach[this.currentCoachName].noEatMenus =
      noEatMenus.split(",");
    this.menusEachCoach[this.currentCoachName].recommandedMenus = [];
  }

  recommandMenuPhase() {
    for (let i = 0; i < 5; i += 1) {
      this.selectCategory();
    }
    this.selectMenuEachCoach();
    OutputView.printResult(this.categories, this.menusEachCoach);
  }

  selectCategory() {
    const tmpCategory = Recommand.selectCategory();

    const dupCnt = this.categories.filter(
      (category) => category === tmpCategory,
    ).length;
    if (dupCnt === 2) {
      this.selectCategory();
      return;
    }
    this.categories.push(tmpCategory);
  }

  selectMenuEachCoach() {
    const allCoachs = Object.keys(this.menusEachCoach);
    allCoachs.forEach((coach) => {
      for (let i = 0; i < 5; i += 1) {
        this.selectMenu(coach, i);
      }
    });
  }

  selectMenu(coach, i) {
    const tmpMenu = Recommand.selectMenu(this.categories[i]);

    const { noEatMenus, recommandedMenus } = this.menusEachCoach[coach];
    if (recommandedMenus.includes(tmpMenu) || noEatMenus.includes(tmpMenu)) {
      this.selectMenu(coach, i);
      return;
    }

    recommandedMenus.push(tmpMenu);
  }
}

module.exports = RecommandController;
