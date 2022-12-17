const LunchRecommendation = require('../domain/LunchRecommendation');
const menuDB = require('../storage/menuDB');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #lunchRecommendation;
  #outputView;
  #inputView;

  constructor(SAMPLE) {
    this.#lunchRecommendation = new LunchRecommendation(SAMPLE);
    this.#outputView = OutputView;
    this.#inputView = InputView;
  }

  execute() {
    this.#outputView.printStart();
    this.#inputView.readCoaches(this.#handleSettingCoach.bind(this));
  }

  #handleSettingCoach(coachNames) {
    this.#lunchRecommendation.setCoaches(coachNames);

    const coachList = this.#lunchRecommendation.getCoaches();
    this.#inputView.readCannotEat(coachList[0], this.#handleSettingCannotEat(coachList).bind(this));
  }

  #handleSettingCannotEat(coachList) {
    return (menusCannotEat) => {
      const coach = coachList.shift();

      if (menusCannotEat[0] !== '')
        this.#lunchRecommendation.setMenusCannotEat(coach, menusCannotEat);

      if (coachList.length === 0) return this.#recommendLunchMenu();

      this.#inputView.readCannotEat(
        coachList[0],
        this.#handleSettingCannotEat(coachList).bind(this)
      );
    };
  }

  #recommendLunchMenu() {
    const recommendationResult = this.#lunchRecommendation.getRecommendation();
    this.#outputView.printResult(recommendationResult);
  }

  #end() {
    this.#outputView.printEnd();
  }
}

module.exports = Controller;
