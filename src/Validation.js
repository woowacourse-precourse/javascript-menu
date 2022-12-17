const { GAME_STRING, GAME_NUMBER, ERROR_MESSAGE } = require('./Constant');

const Validation = {
  name(names) {
    const nameArray = names.split(GAME_STRING.splitString);
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
};

module.exports = Validation;
