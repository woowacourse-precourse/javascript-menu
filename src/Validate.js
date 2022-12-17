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

module.exports = {
  checkCoach,
};
