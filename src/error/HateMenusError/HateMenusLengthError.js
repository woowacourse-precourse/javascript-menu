const { ERROR } = require('../../constants/Constants');
const NameError = require('./NameError');

const HateMenusLengthError = class extends NameError {
  constructor() {
    super(ERROR.hateMenusLength);
  }
};

module.exports = HateMenusLengthError;
