const { ERROR } = require('../../constants/Constants');
const NameError = require('./NameError');

const NameLengthError = class extends NameError {
  constructor() {
    super(ERROR.nameLength);
  }
};

module.exports = NameLengthError;
