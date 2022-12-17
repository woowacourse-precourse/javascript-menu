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

  check(hateMenus) {
    try {
      this.validate(hateMenus);
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  },

  validate(hateMenus) {
    Validator.checkMenuCount(hateMenus);
    Validator.checkDuplicateMenu(hateMenus);
    hateMenus.forEach(menu => {
      if (menu !== '') {
        Validator.checkExistMenu(menu);
      }
    });
  },
};

module.exports = HateMenusChecker;
