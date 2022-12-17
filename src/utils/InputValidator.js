const { ERROR_MSG } = require('../constants/Strings');

const InputValidator = Object.freeze({
  coachNames(names) {
    const coaches = names.split(',');
    if (coaches.length < 2 || coaches.length > 5) {
      throw new Error(ERROR_MSG.COACHES_SIZE);
    }
    coaches.forEach(name => {
      if (name.length < 2 || name.length > 4) {
        throw new Error(ERROR_MSG.COACH_NAME_LENGTH);
      }
    });
  },
});

module.exports = InputValidator;
