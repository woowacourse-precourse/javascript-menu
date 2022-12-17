// const { CATEGORY } = require('../Utils/Constants');
const { Console } = require('@woowacourse/mission-utils');
class MenuSelect {

  chooseCategory(number) {
    switch (number) {
      case 1:
        return `일식`;
      case 2:
        return `한식`;
      case 3:
        return `중식`;
      case 4:
        return `아시안`;
      case 5:
        return `양식`;
    }
  };
};

module.exports = MenuSelect;
