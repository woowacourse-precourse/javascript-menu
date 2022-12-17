const { GAME_STRING } = require('../Constant');

const WrapperString = (array) => {
  return GAME_STRING.resultWrapper(array.join(GAME_STRING.dividingLine));
};

module.exports = WrapperString;
