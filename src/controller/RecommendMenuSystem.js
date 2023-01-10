const { InputView } = require('../view/InputView');
const { OutputView } = require('../view/OutputView');
const { isCorrectInputHandler } = require('./IsCorrectInputHandler');
const { Validation } = require('./Validation');

class RecommendMenuSystem {
  constructor(model, coachRepo) {
    this.recommendMenu = model;
    this.coach = coachRepo;
  }

  start() {
    OutputView.printRecommendMenuStart();
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
    this.requestHateFoods();
  }

  requestHateFoods() {
    const currentCoach = this.coach.getCurrentCoach();
    if (this.coach.possibleGetCurrentCoach()) {
      InputView.readNotEatMenu(currentCoach, this.validateInputOfHateFoods.bind(this, currentCoach));
      return;
    }
    this.coach.resetHandlingCount();
    this.analyseCategory();
  }

  validateInputOfHateFoods(coach, hateFood) {
    if (!isCorrectInputHandler(Validation.ofMenu, hateFood)) {
      this.coach.decreaseHandlingCount();
      this.requestHateFoods();
      return;
    }
    this.setCoachHateFood(coach, hateFood);
    this.requestHateFoods();
  }

  analyseCategory() {
    const randomCategory = this.recommendMenu.createRandomCateroy();
    this.announceCategory(randomCategory);
    this.analyseMenu(randomCategory);
  }

  analyseMenu(category) {
    const currentCoach = this.coach.getCurrentCoach();
    if (this.coach.possibleGetCurrentCoach()) {
      this.announceMenu(currentCoach, this.recommendMenu.create(this.coach.getHateFood(currentCoach), category));
      this.analyseMenu(category);
      return;
    }
    this.coach.resetHandlingCount();
    this.end();
  }

  end() {
    OutputView.printRecommendMenuAllDone();
  }

  setCoachName(coach) {
    this.coach.setName(coach);
  }

  setCoachHateFood(coach, hateFood) {
    this.coach.setHateFood(coach, hateFood);
  }

  announceCategory(category) {
    OutputView.printRecommendResult();
    OutputView.printCategory(category);
  }

  announceMenu(coach, recommendMenu) {
    OutputView.printCustomizedMenuForCoach(coach, recommendMenu);
  }
}

module.exports = RecommendMenuSystem;
