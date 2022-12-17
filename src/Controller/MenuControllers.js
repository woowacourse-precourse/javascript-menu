const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Validation = require('../Utils/Validation');
const CoachGroup = require('..//Model/CoachGroup');

class MenuController {
  #coachGroup;
  #coachNames = [];

  start() {
    OutputView.printStart();
    this.getCoachesName();
  }

  getCoachesName() {
    InputView.readCoachesName((coachesName) => {
      Validation.checkCoaches(coachesName);
      this.#coachGroup = new CoachGroup(coachesName);
      const coaches = this.#coachGroup.getCoachGroup();
      coaches.forEach((coach) => this.#coachNames.push(coach.getName()));
      let index = 0;
      this.getNotEatMenu(this.#coachGroup.getCoachGroup(), index, this.#coachNames[index]);
    });
  }
  
  getNotEatMenu(coaches, index, name) {
    InputView.readNotEatMenu(name, (notEatMenu) => {
      Validation.checkNotEatMenu(notEatMenu);
      const correctCoach = coaches.filter((coach) => coach.getName() === name);
      correctCoach.forEach((el) => el.getNotEatMenu(notEatMenu));
      index += 1;
      if (index === coaches.length) return this.showRecommendMenu();
      return this.getNotEatMenu(coaches, index, this.#coachNames[index]);
    });
  }

  showRecommendMenu() {
    OutputView.printResult();
  }
}

module.exports = MenuController;
