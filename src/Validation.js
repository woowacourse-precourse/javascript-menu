const { CONDITION, ERROR_MESSAGE } = require('./Constants');

const Validation = {
  coach: names => {
    if (CONDITION.COACH_NUMBER(names)) {
      throw new Error(ERROR_MESSAGE.COACH_NUMBER);
    }

    if (CONDITION.NAME_LENGTH(names)) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    }
  },
  food: foods => {
    if (CONDITION.FODDS_LENGTH(foods)) {
      throw new Error(ERROR_MESSAGE.FODDS_LENGTH);
    }
  },
};

module.exports = Validation;
