const OutputView = require('../views/OutputView');
const Validator = require('./Validator');

const NamesChecker = {
  checkInput(names) {
    try {
      this.validateInput(names);
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  },

  validateInput(names) {
    Validator.checkTruthy(names);
    Validator.checkType(names, 'string');
  },

  check(names) {
    try {
      this.validate(names);
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  },

  validate(names) {
    names.forEach(coach => Validator.checkNameLength(coach));
    Validator.checkHeadCount(names);
    Validator.checkDuplicateName(names);
  },
};

module.exports = NamesChecker;
