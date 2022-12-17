const { ERROR } = require('./Constants');
const { Quit } = require('../View/IOView');

const Validator = {
  checkNumberType(userInput) {
    const regExp = /^[0-9]+$/;
    if (!regExp.test(userInput)) return Quit.byException(ERROR.)
  }
};

module.exports = Validator;
