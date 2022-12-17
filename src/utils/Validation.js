const { ERROR, ZERO } = require('../utils/constants');

const Validation = {
  checkBlank(input) {
    if (input.length === ZERO) {
      throw ERROR.mustNotBeBlank;
    }
  },

  checkStringType(input) {
    if (!Number.isNaN(Number(input))) {
      throw ERROR.mustBeStringType;
    }
  },

  checkValidLengthOfCoaches(coaches) {
    coaches = coaches.split(',');
    if (coaches.length < 2 || coaches.length > 5) {
      throw ERROR.mustBeValidLengthOfCoaches;
    }
  },

  checkValidMenu(menus, SAMPLE) {
    menus = menus.split(',');

    let allMenus = [];
    Object.keys(SAMPLE).forEach((menu) => {
      let array = SAMPLE[menu].split(', ');
      array.forEach((menu) => allMenus.push(menu));
    });

    menus.forEach((menu) => {
      if (allMenus.includes(menu) === false) {
        throw ERROR.mustBeInSAMPLE;
      }
    });
  },

  checkValidLengthOfMenus(menus) {
    menus = menus.split(',');

    if (menus.length > 2) {
      throw ERROR.mustBeValidLengthOfMenus;
    }
  },
};

module.exports = Validation;
