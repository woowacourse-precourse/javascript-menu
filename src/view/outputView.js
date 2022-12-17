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
  result(stringifiedMenu = "") {
    this.print(message.RESULT);

    this.print(stringifiedMenu);
  },
  complete() {
    this.print(message.COMPLETE);
    this.close();
  },
  printDay() {
    const days = ["구분", "월요일", "화요일", "수요일", "목요일", "금요일"];
    this.print(days.join(" | "));
  },

  printSchedule(name, serves) {
    const prints = [name, ...serves];
    this.print(prints.join(" | "));
  },
};

module.exports = outputView;
