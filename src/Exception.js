const MissionUtils = require('@woowacourse/mission-utils');
const { PARAMETERS, ERROR_MESSAGE } = require('./utils/constants');

const Exception = {
  checkCoachesInput(input) {
    const COACHES = input.split(',');

    if (!this.checkInputFormat(COACHES, PARAMETERS.coachNumberRange)) {
      MissionUtils.Console.print(ERROR_MESSAGE.invalidCoachLength);
      throw new Error(ERROR_MESSAGE.invalidCoachLength);
    }

    COACHES.forEach((coach) => {
      if (!this.checkInputFormat(coach, PARAMETERS.coachNameLengthRange)) {
        MissionUtils.Console.print(ERROR_MESSAGE.invalidCoachNameLength);
        throw new Error(ERROR_MESSAGE.invalidCoachNameLength);
      }
    });
  },

  checkInedibleMenusInput(input) {
    const INEDIBLE_MENUS = input.split(',');

    if (
      !this.checkInputFormat(INEDIBLE_MENUS, PARAMETERS.inedibleMenuRange) &&
      PARAMETERS.checkBlackSpace.test(INEDIBLE_MENUS[0])
    ) {
      MissionUtils.Console.print(ERROR_MESSAGE.invalidInedibleMenuLength);
      throw new Error(ERROR_MESSAGE.invalidInedibleMenuLength);
    }
  },

  checkInputFormat(input, range) {
    const [MIN_LENGTH, MAX_LENGTH] = range;

    if (input.length >= MIN_LENGTH && input.length <= MAX_LENGTH) {
      return true;
    }

    return false;
  },
};

module.exports = Exception;
