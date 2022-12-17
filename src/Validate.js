const {
  ZERO,
  TWO,
  FOUR,
  FIVE,
  ERROR_COACH_NUMBER,
  ERROR_COACH_LENGTH,
  ERROR_MENU_NAME,
} = require('./Constants');

const checkCoachNameLength = name => name.length < TWO || name.length > FOUR;

const checkValidateCoachNames = names => {
  for (let i = 0; i < names.length; i += 1) {
    if (checkCoachNameLength(names[i])) throw new Error(ERROR_COACH_LENGTH);
  }
};

const checkCoachNumber = names => names.length < TWO || names.length > FIVE;

const checkValidateCoach = names => {
  if (checkCoachNumber(names)) throw new Error(ERROR_COACH_NUMBER);
};

const checkMenuLength = menu => menu.length < ZERO || menu.length > TWO;

const checkMenu = menu => {
  if (checkMenuLength(menu)) throw new Error(ERROR_MENU_NAME);
};

module.exports = {
  checkValidateCoach,
  checkValidateCoachNames,
  checkMenu,
};
