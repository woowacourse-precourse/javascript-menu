const {Console} = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../Constant");


const OutputView = {
  printGameStartMessage() {
    Console.print(OUTPUT_MESSAGE.gameStartMessage)
  }
  
};

module.exports = OutputView;
