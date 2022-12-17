const {
  TWO,
  FOUR,
  FIVE,
  ERROR_COACH_NUMBER,
  ERROR_COACH_LENGTH,
} = require('./Constants');

const checkCoachNameLength = name => name.length < 2 || name.length > 4;

const checkValidateCoachNames = names => {
  for (let i = 0; i < names.length; i += 1) {
    if (checkCoachNameLength(names[i])) throw new Error(ERROR_COACH_LENGTH);
  }
};

const checkCoachNumber = names => names.length < TWO || names.length > FIVE;

const checkValidateCoach = names => {
  if (checkCoachNumber(names)) throw new Error(ERROR_COACH_NUMBER);
};

module.exports = { checkValidateCoach, checkValidateCoachNames };
