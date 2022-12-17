const { REGEX } = require('./constant/Constant');

const Validator = {
  errorIfCoachNamesInvalid(coachNames) {
    if (!REGEX.IS_NAME_VALID.test(coachNames)) {
      throw Error();
    }
  },
};

module.exports = Validator;
