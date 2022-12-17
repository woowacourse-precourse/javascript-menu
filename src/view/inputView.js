const { Console } = require("@woowacourse/mission-utils");
const message = require("../constant/message");

const inputView = {
  read(...arg) {
    return Console.readLine(...arg);
  },
  askName(cb) {
    this.read(message.NAME, cb);
  },
  askHates(name, cb) {
    this.read(message.hates(name), cb);
  },
};

module.exports = inputView;
