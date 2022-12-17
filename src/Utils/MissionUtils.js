const MissionUtils = require("@woowacourse/mission-utils");

const utils = {
  print(message) {
    MissionUtils.Console.print(message);
  },
  readLine(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  },
  close() {
    MissionUtils.Console.close();
  },
  pickNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 5);
  },
  shuffle(menus) {
    return MissionUtils.Random.shuffle(menus);
  },
};

module.exports = Object.freeze(utils);
