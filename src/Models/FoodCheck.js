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
    const foodList = food.split(',');
    // this.coachCount(coachName);

    // for (let i = 0; i < coachName.length; i++) {
    //   this.coachNameLength(coachName[i]);
    //   this.coachWords(coachName[i]);
    // };
  };

  coachCount(coachName) {
    if (coachName.length < 2 || coachName.length > 5) {
      throw (ERROR.coachCountError);
    };
  };

  coachNameLength(name) {
    if (name.length < 2 || name.length > 4) {
      throw (ERROR.coachNameLength);
    };
  };

  coachWords(name) {
    if (name.match(/[ ]/g)) {
      throw (ERROR.coachWord);
    };
  };
};

module.exports = FoodCheck;
