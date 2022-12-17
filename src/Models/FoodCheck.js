const { ERROR } = require('../Utils/Constants');
const OutputView = require('../View/OutputView');

class FoodCheck {
  validate(food) {
    try {
      this.checkFoodFormat(food);
      return true;
    } catch (error) {
      OutputView.printError(error);
      return false;
    };
  };

  checkFoodFormat(food) {
    let foodList = food.split(',');
    this.foodCount(foodList);
    this.sameFoodChech(foodList);
  };

  foodCount(foodList) {
    if (foodList.length > 2) {
      throw (ERROR.foodCount);
    };
  };

  sameFoodChech(foodList) {
    if (new Set(foodList).size !== foodList.length) {
      throw (ERROR.sameFood);
    };
  };
};

module.exports = FoodCheck;
