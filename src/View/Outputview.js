const {Console} = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE, RESULT } = require("../Constant");


const OutputView = {
  printGameStartMessage() {
    Console.print(OUTPUT_MESSAGE.gameStartMessage)
  },

  printResultStartMessage() {
    Console.print(OUTPUT_MESSAGE.gemeResultMessage)
    Console.print(RESULT.resultTitle)
  },

  printResult(categorys) {
    Console.print(`[ 카테고리 | ${categorys} ]`)
  }
  
};

module.exports = OutputView;
