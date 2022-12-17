const { Console } = require("@woowacourse/mission-utils");
const message = require("../constant/message");

const inputView = {
  read(message, next) {
    return Console.readLine(message, next);
  },
  askName(next) {
    this.read(message.NAME, next);
  },
  askHates(name, next) {
    console.log(name, next);
    this.read(message.hates(name), next);
  },
};

module.exports = inputView;
