const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const NameCheck = require('../Models/NameCheck');
const FoodCheck = require('../Models/FoodCheck');

class MenuController {
  coachNames = [];
  index = 0;
  notFoods = [];

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
      return this.notFoodInput();
    };
  };

  notFoodInput() {
    InputView.inputNotFood(this.coachNames[this.index], food => {
      this.foodValidate(this.FoodCheck.validate(food), food);
    });
  };

  foodValidate(isValid, food) {
    if (!isValid) {
      return this.notFoodInput();
    };

    this.setNotFood(food);
  };

  setNotFood(food) {
    this.notFoods.push(food.split(','));
    Console.print(this.notFoods)
    this.index += 1;
    this.foodInputStart();
  };


};

module.exports = MenuController;