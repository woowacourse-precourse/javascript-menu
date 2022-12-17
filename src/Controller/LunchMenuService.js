const CategoryMaker = require('../Model/CategoryMaker');
const Coach = require('../Model/Coach');
const { InputView, OutputView } = require('../View/IOView');

class LunchMenuService {
  #coachNameList;

  #exceptFoodList;

  #category;

  constructor() {
    this.#category = CategoryMaker.makeCategory();
    this.#coachNameList = [];
    this.#exceptFoodList = {};
  }

  start() {
    this.requestCoachName();
  }

  requestCoachName() {
    InputView.readCoachName((userInput) => {
      this.#coachNameList = userInput.split(',');
      this.requestExceptFood(this.#coachNameList);
    });
  }

  requestExceptFood(coachNameList) {
    coachNameList.forEach((coach) => {
      this.requestEachCoachExceptFood(coach);
    });
  }

  requestEachCoachExceptFood(coach) {
    InputView.readExceptFood((userInput) => {
      this.#exceptFoodList[coach] = userInput.split(',');
    });
  }
}

module.exports = LunchMenuService;
