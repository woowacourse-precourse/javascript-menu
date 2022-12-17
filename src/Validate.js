const { TWO, FOUR, FIVE, ERROR_COACH_NUMBER } = require('./Constants');

// const checkCoachNameLength = names => {
//   const nameLength = names.map(name => name.length);
//   nameLength.every(name => name < TWO);
// };

const checkCoachNumber = names => names.length < TWO || names.length > FIVE;

const checkValidateCoach = names => {
  // if (checkCoachNameLength(names)) throw new Error('제발');
  if (checkCoachNumber(names)) throw new Error(ERROR_COACH_NUMBER);
};

module.exports = { checkValidateCoach };
