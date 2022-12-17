const { ERROR } = require("../constants/index");

const Validator = {
  checkNameCountValid(names) {
    const nameCountValid = 2 <= names.length && names.length <= 5;

    if (!nameCountValid) throw new Error(ERROR.NAME_COUNT);
  },

  checkNameLengthValid(names) {
    const nameLengthValid = names.every((name) => {
      nameLength = name.length;

      return 2 <= nameLength && nameLength <= 4;
    });

    if (!nameLengthValid) throw new Error(ERROR.NAME_LENGTH);
  },
};

module.exports = Validator;
