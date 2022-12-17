const { Console } = require('@woowacourse/mission-utils');
const Message = require('../constant/PrintMessage');

const OutputView = {
  printStart() {
    Console.print(Message.START);
  },
};

module.exports = OutputView;
