const { Console } = require('@woowacourse/mission-utils');
const { ERROR } = require('./constants');

const validateCoachName = (coach) => {
  const numberOfCoach = coach.length;

  if (numberOfCoach < 2 || numberOfCoach > 5) {
    Console.print(ERROR.OUT_OF_RANGE);
    throw new Error();
  }

  const filterCoach = coach.filter((name) => name.length >= 2 && name.length <= 4);
  if (filterCoach.length !== numberOfCoach) {
    Console.print(ERROR.COACH_NAME_LENGTH);
    throw new Error();
  }
};

const validateDislikeMenu = (menu) => {
  if (menu.length > 2) {
    Console.print(ERROR.NUM_DISLIKE_MENU);
    throw new Error();
  }
};

module.exports = { validateCoachName, validateDislikeMenu };
