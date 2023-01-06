const { InputView } = require('../view/InputView');
const { OutputView } = require('../view/OutputView');
const { isCorrectInputHandler } = require('./IsCorrectInputHandler');
const { Validation } = require('./Validation');

class RecommendMenuSystem {
  constructor(model, coachRepo) {
    this.recommendMenu = model;
    this.coach = coachRepo;
    this.handlingCount = 0;
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
    const currentCoach = this.coach.getNames()[this.handlingCount];
    if (this.handlingCount < this.coach.getNames().length) {
      InputView.readNotEatMenu(currentCoach, this.validateInputOfHateFoods.bind(this, currentCoach));
      return;
    }
    this.resetHandlingCount();
    this.analyseCategory();
  }

  validateInputOfHateFoods(coach, hateFood) {
    if (!isCorrectInputHandler(Validation.ofMenu, hateFood)) {
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
    if (this.handlingCount < this.coach.getNames().length) {
      const currentCoach = this.coach.getNames()[this.handlingCount];
      this.announceMenu(currentCoach, this.recommendMenu.create(this.coach.getHateFood(currentCoach), category));
      this.handlingCount += 1;
      this.analyseMenu(category);
      return;
    }
    this.resetHandlingCount();
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
    this.handlingCount += 1;
  }

  announceCategory(category) {
    OutputView.printRecommendResult();
    OutputView.printCategory(category);
  }

  announceMenu(coach, recommendMenu) {
    OutputView.printCustomizedMenuForCoach(coach, recommendMenu);
  }

  resetHandlingCount() {
    this.handlingCount = 0;
  }
}

module.exports = RecommendMenuSystem;
