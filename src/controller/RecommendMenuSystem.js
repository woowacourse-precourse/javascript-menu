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
  }

  setCoachName(coach) {
    this.coach.setName(coach);
    this.requestHateFoods();
  }

  requestHateFoods() {
    if (this.handlingCount < this.coach.getNames().length) {
      const currentCoach = this.coach.getNames()[this.handlingCount];
      InputView.readNotEatMenu(currentCoach, hateFood => {
        if (!isCorrectInputHandler(Validation.ofMenu, hateFood)) {
          this.requestHateFoods();
          return;
        }
        this.coach.setHateFood(currentCoach, hateFood);
        this.handlingCount += 1;
        this.requestHateFoods();
      });
      return;
    }
    this.resetHandlingCount();
    this.analyze();
  }

  analyze() {
    const randomCategory = this.recommendMenu.createRandomCateroy();
    OutputView.printRecommendResult();
    OutputView.printCategory(randomCategory);
    this.announceResult(randomCategory);
  }

  announceResult(category) {
    if (this.handlingCount < this.coach.getNames().length) {
      const currentCoach = this.coach.getNames()[this.handlingCount];
      OutputView.printCustomizedMenuForCoach([
        currentCoach,
        ...this.recommendMenu.create(this.coach.getHateFood(currentCoach), category),
      ]);
      this.handlingCount += 1;
      this.announceResult(category);
      return;
    }
    this.resetHandlingCount();
    this.end();
  }

  end() {
    OutputView.printRecommendMenuAllDone();
  }

  resetHandlingCount() {
    this.handlingCount = 0;
  }
}

module.exports = RecommendMenuSystem;
