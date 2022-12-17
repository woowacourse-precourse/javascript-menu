const { ERROR } = require('../../constants/Constants');
const HateMenusError = require('./HateMenusError');

const HateMenusLengthError = class extends HateMenusError {
  constructor() {
    super(ERROR.hateMenusLength);
  }
};

module.exports = HateMenusLengthError;
