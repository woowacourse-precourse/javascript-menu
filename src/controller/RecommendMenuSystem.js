const { InputView } = require('../view/InputView');
const { OutputView } = require('../view/OutputView');
const { isCorrectInputHandler } = require('./isCorrectInputHandler');
const { Validation } = require('./Validation');

class RecommandMenuSystem {
  constructor(model, coachRepository) {
    this.recommandMenu = model;
    this.coach = coachRepository;
  }

  start() {
    OutputView.printRecommandMenuStart();
    this.requestCoachName();
  }

  requestCoachName() {
    InputView.readCoachName(this.validateInputOfCoachName.bind(this));
  }

  validateInputOfCoachName(coachName) {
    if (!isCorrectInputHandler(Validation.ofCoachName, coachName)) {
      this.requestCoachName();
      return;
    }
    this.setCoachName(coachName);
  }

  setCoachName(coach) {
    this.coach.setName(coach);
    this.requestHateFoodOfFirstCoach();
  }

  requestHateFoodOfFirstCoach() {
    const firstCoach = this.coach.getName()[0];
    InputView.readNotEatMenu(firstCoach, this.saveFirstCoachCharacter.bind(this));
  }

  saveFirstCoachCharacter(userInputMenu) {
    const firstCoach = this.coach.getName()[0];
    this.coach.setHateFood(firstCoach, userInputMenu);
    this.requestHateFoodOfSecondCoach();
  }
  requestHateFoodOfSecondCoach() {
    const secondCoach = this.coach.getName()[1];
    InputView.readNotEatMenu(secondCoach, this.saveSecondCoachCharacter.bind(this));
  }

  saveSecondCoachCharacter(userInputMenu) {
    const secondCoach = this.coach.getName()[1];
    this.coach.setHateFood(secondCoach, userInputMenu);
    this.requestHateFoodOfThirdCoach();
  }
  requestHateFoodOfThirdCoach() {
    const thirdCoach = this.coach.getName()[2];
    InputView.readNotEatMenu(thirdCoach, this.saveThirdCoachCharacter.bind(this));
  }

  saveThirdCoachCharacter(userInputMenu) {
    const thirdCoach = this.coach.getName()[2];
    this.coach.setHateFood(thirdCoach, userInputMenu);
    this.analyzeStart;
  }

  analyzeStart() {
    OutputView.printRecommandMenuStart();
    this.recommandMenu.analinzing();
  }

  analinzing() {}
}

module.exports = RecommandMenuSystem;
