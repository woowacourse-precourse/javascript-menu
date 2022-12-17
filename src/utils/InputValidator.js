const { SAMPLE } = require('../constants/Constant');
const { ERROR_MSG } = require('../constants/Strings');

const InputValidator = Object.freeze({
  coachNames(input) {
    const coaches = input.split(',');
    if (coaches.length < 2 || coaches.length > 5) {
      throw new Error(ERROR_MSG.COACHES_SIZE);
    }
    coaches.forEach(name => {
      if (name.length < 2 || name.length > 4) {
        throw new Error(ERROR_MSG.COACH_NAME_LENGTH);
      }
    });
  },

  hateMenu(input) {
    const foods = input.split(',');
    if (foods.length > 2) {
      throw new Error(ERROR_MSG.HATE_MENUS_SIZE);
    }
    for (let i = 0; i < foods.length; i += 1) {
      if (i === 0 && foods[0] === '') break;
      if (InputValidator.isCorrectMenu(foods[i]) === false) {
        throw new Error(foods[i] + ERROR_MSG.INVALID_MENU);
      }
    }
  },

  isCorrectMenu(menu) {
    let flag = false;

    Object.keys(SAMPLE).forEach(category => {
      if (SAMPLE[category].split(', ').includes(menu)) flag = true;
    });

    return flag;
  },
});

module.exports = InputValidator;
