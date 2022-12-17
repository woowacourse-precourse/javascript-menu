const OutputView = require('../views/OutputView');
const Validator = require('./Validator');

const HateMenusChecker = {
  checkInput(input) {
    try {
      this.validateInput(input);
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  },

  validateInput(input) {
    Validator.checkType(input, 'string');
  },
};

module.exports = HateMenusChecker;
