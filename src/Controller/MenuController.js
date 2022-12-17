const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const NameCheck = require('../Models/NameCheck');
const FoodCheck = require('../Models/FoodCheck');

class MenuController {
  coachNames = [];
  index = 0;

  constructor() {
    this.NameCheck = new NameCheck();
    this.FoodCheck = new FoodCheck();
    OutputView.startMessage();
  };

  inputSize() {
    InputView.inputNames(name => {
      this.isValidCoach(this.NameCheck.validate(name), name);
    });
  };

  isValidCoach(isValid, coachName) {
    if (!isValid) {
      return this.inputSize();
    };

    this.coachNames = coachName.split(',');
    this.foodInputStart();
  };

  foodInputStart() {
    if (this.index < this.coachNames.length) {
      return this.notFoodInput(this.coachNames[this.index]);
    };

    // return this.setNotFood();
  };

  notFoodInput(eachCoach) {
    InputView.inputNotFood(eachCoach, food => {
      this.index += 1;
      this.foodInputStart();
    });
  };

  // setNotFood() {

  // };


};

module.exports = MenuController;