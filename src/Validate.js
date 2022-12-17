const { Console } = require("@woowacourse/mission-utils");

const coachNameLength = function checkCoachNameLength(coaches, callback) {
  // 이름에 띄워쓰기가 있다면?
  try {
    for (const name of coaches) {
      if (name.length > 4 || name.length < 2)
        throw new Error("[ERROR]: 코치의 이름은 2~4글자 사이여야 합니다.");
    }
    return true;
  } catch (error) {
    Console.print(error);
    callback();
    return false;
  }
};

const coachCount = function checkCoachTotalCount(coaches, callack) {
  try {
    if (coaches.length > 5 || coaches.length < 2)
      throw new Error(
        "[ERROR]: 점심을 같이 먹을 코치의 수는 2 ~ 5명이어야 합니다.",
      );
    return true;
  } catch (error) {
    Console.print(error);
    callack();
    return false;
  }
};

const checkCoach = function checkCoachValidation(coaches, callback) {
  const checkCoachesName = coachNameLength(coaches, () => callback());
  if (!checkCoachesName) return;

  const checkCoachCount = coachCount(coaches, () => callback());
  if (!checkCoachCount) return;
};

const foodCount = function checkFoodCharCount(foods, callback) {
  try {
    if (foods.length > 2)
      throw new Error("[ERROR]: 못먹는 메뉴의 개수는 0 ~ 2개 입니다.");
    return true;
  } catch (error) {
    Console.print(error);
    callback();
    return false;
  }
};

const checkFood = function checkCanNotEatValidation(foods, callback, index) {
  const checkFoodCount = foodCount(foods, callback);
  if (!checkFoodCount) return;
};

module.exports = {
  checkCoach,
  checkFood,
};
