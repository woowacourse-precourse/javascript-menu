const { Console } = require("@woowacourse/mission-utils");
const {
  DEFAULT: { TRUE, FALSE },
  ERROR,
} = require("./utils/constant");

const coachNameLength = function checkCoachNameLength(coaches, callback) {
  try {
    for (const name of coaches) {
      if (name.length > DEFAULT.MAX_CHAR || name.length < DEFAULT.MIN_CHAR)
        throw new Error(ERROR.COACH_CHAR_LENGTH);
    }
    return TRUE;
  } catch (error) {
    Console.print(error);
    callback();
    return FALSE;
  }
};

const coachCount = function checkCoachTotalCount(coaches, callack) {
  try {
    if (
      coaches.length > DEFAULT.MAX_COACH ||
      coaches.length < DEFAULT.MIN_COACH
    )
      throw new Error(ERROR.COACH_COUNT);
    return TRUE;
  } catch (error) {
    Console.print(error);
    callack();
    return FALSE;
  }
};

const checkCoach = function checkCoachValidation(coaches, callback) {
  const checkCoachesName = coachNameLength(coaches, () => callback());
  if (!checkCoachesName) return FALSE;

  const checkCoachCount = coachCount(coaches, () => callback());
  if (!checkCoachCount) return FALSE;

  return TRUE;
};

const foodCount = function checkFoodCharCount(foods, callback) {
  try {
    if (foods.length > DEFAULT.MAX_FOOD) throw new Error(ERROR.FOOD_RANGE);
    return TRUE;
  } catch (error) {
    Console.print(error);
    callback();
    return FALSE;
  }
};

const checkFood = function checkCanNotEatValidation(foods, callback) {
  const checkFoodCount = foodCount(foods, callback);
  if (!checkFoodCount) return FALSE;

  return TRUE;
};

module.exports = {
  checkCoach,
  checkFood,
};
