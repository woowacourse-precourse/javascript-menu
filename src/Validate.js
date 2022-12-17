const { ERROR_MSG } = require('./Constant');

const isNameInRange = input => {
  if (input.every(name => name.length >= 2 && name.length <= 4)) return true;
  return false;
};

const isTeamInRange = input => {
  if (input.length >= 2 && input.length <= 5) return true;
  return false;
};

const allergyLength = input => {
  if (input.length >= 0 && input.length <= 2) return true;
  return false;
};
const Validate = {
  validateReadCoachName(input) {
    if (!isNameInRange(input)) throw new Error(ERROR_MSG.NAME_LENGTH);
    if (!isTeamInRange(input)) throw new Error(ERROR_MSG.TEAM_LENGTH);
    return true;
    //return Array.from(input.split(','));
  },
  validateReadAllergy(input) {
    if (!allergyLength(input)) throw new Error(ERROR_MSG.NO_EAT_FOOD_LENGTH);
    return true;
  },
};

module.exports = Validate;
