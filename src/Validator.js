const { ValidConfig, Message } = require('./Config');

const validateCoachNumbers = (names) => {
  if (names.length < ValidConfig.MIN_COACH_NUMBER || names.length > ValidConfig.MAX_COACH_NUMBER) {
    throw new Error(Message.ERROR_COACH_NUMBER);
  }
};

const validateSeparatorSpace = (name) => {
  if (name.length !== name.trim().length) {
    throw new Error(Message.ERROR_SEPARATOR);
  }
};

const validateNameLength = (name) => {
  if (name.length < ValidConfig.MIN_NAME_LENGTH || name.length > ValidConfig.MAX_NAME_LENGTH) {
    throw new Error(Message.ERROR_NAME_LENGTH);
  }
};

const Validator = {
  validateCoachNames(names) {
    validateCoachNumbers(names);
    names.forEach((name) => {
      validateSeparatorSpace(name);
      validateNameLength(name);
    });
  },
};

module.exports = Validator;
