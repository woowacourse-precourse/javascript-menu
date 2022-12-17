const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const { PROCESS_MESSAGE } = require("../constant/ProcessMessage");

const InputView = {
  readCoachesName(fn) {
    Console.readLine(PROCESS_MESSAGE.inputNames, (names) => {
      fn(names);
    });
  },

  readUneatableMenu(coach, fn) {
    Console.readLine(coach + PROCESS_MESSAGE.inputMenu, (menus) => {
      fn(menus);
    });
  },
};

module.exports = InputView;
