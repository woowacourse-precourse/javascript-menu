const { ERROR_MESSAGE, GAME_STRING, GAME_NUMBER } = require('./Constant');

const Validation = {
  coachAndName(names) {
    const nameArray = names.split(GAME_STRING.splitString);
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
    const menuArray = menus.split(GAME_STRING.splitString);
    if (
      menuArray.length < GAME_NUMBER.minMenu ||
      menuArray.length > GAME_NUMBER.maxMenu
    ) {
      throw new Error(ERROR_MESSAGE.menuRange);
    }
  },
};

module.exports = Validation;
