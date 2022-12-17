const { NUMBER } = require('./constants/number');
const { MENU } = require('./constants/string');

const validate = {
  names(input) {
    if (input.length < NUMBER.minMember || input.length > NUMBER.maxMember) {
      throw new Error();
    }
    for (item of input) {
      if (item.length < NUMBER.minName || item.length > NUMBER.maxName) {
        throw new Error();
      }
    }
  },

  inedible(menus) {
    if (menus.length > NUMBER.maxInedible) {
      throw new Error();
    }
    if (hadDuplicate(menus)) {
      throw new Error();
    }
    for (item of menus) {
      if (totalMenu.indexOf(item) < 0) {
        throw new Error();
      }
    }
  },
};

module.exports = validate;

const totalMenu = Object.values(MENU).flat();

const hadDuplicate = (array) => {
  const arrayToSet = new Set(array);
  if (arrayToSet.size !== array.length) {
    return true;
  }
  return false;
};
