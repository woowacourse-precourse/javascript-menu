const { ERROR_MESSAGE, GAME_NUMBER } = require('./Constant');
const SplitAndTrim = require('./utils/SplitAndTrim');

const Validation = {
  coachAndName(names) {
    const nameArray = SplitAndTrim(names);
    Validation.coach(nameArray);
    nameArray.forEach((coachName) => {
      Validation.nameRange(coachName);
    });
  },
  nameRange(name) {
    if (
      name.length < GAME_NUMBER.minName ||
      name.length > GAME_NUMBER.maxName
    ) {
      throw new Error(ERROR_MESSAGE.nameRange);
    }
  },
  coach(coaches) {
    if (
      coaches.length < GAME_NUMBER.minCoach ||
      coaches.length > GAME_NUMBER.maxCoach
    ) {
      throw new Error(ERROR_MESSAGE.coachRange);
    }
  },
  menu(menus) {
    const menuArray = SplitAndTrim(menus);
    if (
      menuArray.length < GAME_NUMBER.minMenu ||
      menuArray.length > GAME_NUMBER.maxMenu
    ) {
      throw new Error(ERROR_MESSAGE.menuRange);
    }
  },
};

module.exports = Validation;
