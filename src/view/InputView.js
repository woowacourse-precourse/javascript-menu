const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../util/Constant');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readCotchName(input) {
    Console.readLine(INPUT_MESSAGE.COTCH_NAME, input);
  },

  readNotEat(cotch, input) {
    Console.readLine(`${cotch}${INPUT_MESSAGE.NOT_EAT}`, input);
  },
};

module.exports = InputView;
