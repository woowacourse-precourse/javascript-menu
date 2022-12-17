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

const validateMenuNumbers = (menus) => {
  if (menus.length < ValidConfig.MIN_CANNOTEAT_LENGTH
    || menus.length > ValidConfig.MAX_CANNOTEAT_LENGTH) {
    throw new Error(Message.ERROR_CANNOTEAT);
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

  validateCannotEat(menus) {
    validateMenuNumbers(menus);
    menus.forEach((menu) => {
      validateSeparatorSpace(menu);
    });
  },
};

module.exports = Validator;
