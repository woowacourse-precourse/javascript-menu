const { MESSAGE_ERROR } = require('../constants/messages');
const { FOOD } = require('../constants/values');

const Validator = {
  checkTruthy(value) {
    if (!value) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkType(value, target) {
    if (typeof value !== typeof target) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkNameLength(name) {
    if (name.length < 2 || name > 4) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkHeadCount(heads) {
    if (heads.length < 2 || heads.length > 5) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkDuplicateName(names) {
    const set = new Set(names);
    const newNames = [...set];

    if (names.length !== newNames.length) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkMenuCount(menu) {
    if (menu.length < 0 || menu.length > 2) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkExistMenu(food) {
    if (!FOOD.data.some(category => category.includes(food))) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },

  checkDuplicateMenu(menu) {
    const set = new Set(menu);
    const newMenu = [...set];

    if (menu.length !== newMenu.length) {
      throw new Error(MESSAGE_ERROR.VALUE);
    }
  },
};

module.exports = Validator;
