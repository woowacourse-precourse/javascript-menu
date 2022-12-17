const { GAME_STRING } = require('../Constant');

const SplitAndTrim = (string) => {
  return string.split(GAME_STRING.splitString).map((element) => element.trim());
};

module.exports = SplitAndTrim;
