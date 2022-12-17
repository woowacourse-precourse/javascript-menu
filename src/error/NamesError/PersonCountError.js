const { ERROR } = require('../../constants/Constants');
const NameError = require('./NameError');

const PersonCountError = class extends NameError {
  constructor() {
    super(ERROR.personCount);
  }
};

module.exports = PersonCountError;
