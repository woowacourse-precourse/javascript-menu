const { Console } = require('@woowacourse/mission-utils');
const Randomgenerator = require('../Models/Randomgenerator');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const NameCheck = require('../Models/NameCheck');
const FoodCheck = require('../Models/FoodCheck');
const MenuSelect = require('../Models/MenuSelect');

class MenuController {
  coachNames = [];
  index = 0;
  notFoods = [];
  category = [];

  constructor() {
    this.NameCheck = new NameCheck();
    this.FoodCheck = new FoodCheck();
    this.MenuSelect = new MenuSelect();
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

    return this.menuChoose();
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

  menuChoose() {
    if (this.category.length < 5) {
      return this.setcategory(Randomgenerator.categoryGenerate())
    };
    return this.r()
    // for (let i = 0; i < 5; i++) {
    //   Console.print(this.MenuSelect.chooseCategory(Randomgenerator.categoryGenerate()));
    // };
  };

  setcategory(randomCategory) {
    if (this.category.filter(eachCategory => eachCategory === randomCategory).length === 2) {
      return this.menuChoose();
    };
    
    this.category.push(this.MenuSelect.chooseCategory(randomCategory));
    return this.menuChoose();
  };

  r() {
    Console.print(this.category)
  }
};

module.exports = MenuController;
