const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("../utils/constant");

const InputView = {
  inputCoachNames(callback) {
    Console.readLine(INPUT.COACHES_NAME, callback);
  },

  askMenues(name, callback) {
    Console.readLine(`${name}${INPUT.ASK_MENUS}`, callback);
  },
};

module.exports = { InputView };
