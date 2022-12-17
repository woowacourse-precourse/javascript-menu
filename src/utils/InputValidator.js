const Validator = require('./Validator');
const { COACH, HATE_FOOD, CATEGORY, MENUS, ERROR_MESSAGE } = require('./constants');

class InputValidator extends Validator {
  static validateCoachNamesInput(coachNamesInput) {
    if (
      InputValidator.hasDuplicateComma(coachNamesInput) ||
      InputValidator.hasCommaInFront(coachNamesInput) ||
      InputValidator.hasCommaInBack(coachNamesInput)
    ) {
      throw new Error(ERROR_MESSAGE.coachNamesInput);
    }
  }

  static validateCoachNames(coachNames) {
    if (InputValidator.hasDuplicateElements(coachNames))
      throw new Error(ERROR_MESSAGE.coachNamesDuplication);
    if (coachNames.length < COACH.min || coachNames.length > COACH.max)
      throw new Error(ERROR_MESSAGE.coachNum);
    coachNames.forEach((name) => {
      if (name.length < COACH.nameLengthMin || name.length > COACH.nameLengthMax)
        throw new Error(ERROR_MESSAGE.coachNameLength);
    });
  }

  static validateHateFoodsInput(hateFoodsInput) {
    if (
      InputValidator.hasDuplicateComma(hateFoodsInput) ||
      InputValidator.hasCommaInFront(hateFoodsInput) ||
      InputValidator.hasCommaInBack(hateFoodsInput)
    ) {
      throw new Error(ERROR_MESSAGE.hateFoodsInput);
    }
  }

  static validateHateFoods(hateFoods) {
    if (InputValidator.hasDuplicateElements(hateFoods))
      throw new Error(ERROR_MESSAGE.hateFoodsDuplication);
    if (hateFoods.length < HATE_FOOD.min || hateFoods.length > HATE_FOOD.max)
      throw new Error(ERROR_MESSAGE.hateFoodNum);
    hateFoods.forEach((food) => {
      if (food.length === 0) return true;
      if (!InputValidator.isValidFood(food)) throw new Error(ERROR_MESSAGE.invalidHateFood);
    });
  }

  static isValidFood(food) {
    for (let idx = CATEGORY.min; idx <= CATEGORY.max; idx++) {
      if (MENUS[CATEGORY[idx]].includes(food)) return true;
    }
    return false;
  }
}

module.exports = InputValidator;
