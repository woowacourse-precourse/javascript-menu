const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../utils/constants");


const InputView = {
  readName(callback) {
    Console.readLine(INPUT_MESSAGE.NAME, callback);
  },
  readMenu(name, callback) {
    Console.readLine('\n'+ name + INPUT_MESSAGE.MENU, callback);
  }, 
};

module.exports = InputView;
