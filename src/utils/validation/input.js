const { print } = require('../../ui/OutputView');
const MESSAGE = require('../constants/message');

const handleError = (errorMessage) => {
  try {
    throw new Error(errorMessage);
  } catch (error) {
    print(error.message);
    return false;
  }
};

const isValidCoachName = (name) => name.length >= 2 && name.length <= 4;

const isValidCoachInputs = (coachs) => {
  if (!coachs.every((coach) => isValidCoachName(coach))) {
    return handleError(MESSAGE.ERROR.COACHINPUT.NAME_LENGTH_IS_BETWEEN_TWO_AND_FOUR);
  }
  if (!(coachs.length >= 2 && coachs.length <= 5)) {
    return handleError(MESSAGE.ERROR.COACHINPUT.NUMBER_IS_BETWEEN_TWO_AND_FIVE);
  }
  if (!(coachs.length === new Set(coachs).size)) {
    return handleError(MESSAGE.ERROR.COACHINPUT.DUPLICATED);
  }
  return true;
};

const isValidUnlikeMenus = (unlikeMenus) => {
  if (!(unlikeMenus.length >= 0 && unlikeMenus.length <= 2)) {
    return handleError(MESSAGE.ERROR.MENUINPUT.LENGTH_IS_BETWEEN_ZERO_AND_TWO);
  }
  if (!(unlikeMenus.length === new Set(unlikeMenus).size)) {
    return handleError(MESSAGE.ERROR.MENUINPUT.DUPLICATED);
  }
  return true;
};

module.exports = { isValidCoachInputs, isValidUnlikeMenus };
