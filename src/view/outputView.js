const { Console } = require("@woowacourse/mission-utils");
const message = require("../constant/message");

const outputView = {
  print(str) {
    Console.print(str);
  },
  close() {
    Console.close();
  },
  start() {
    this.print(message.START);
  },
  result(stringifiedMenu) {
    this.print(message.RESULT);
    this.print(stringifiedMenu);
  },
  complete() {
    this.print(message.COMPLETE);
  },
};

module.exports = outputView;
