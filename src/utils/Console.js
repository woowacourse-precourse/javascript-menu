const MissionUtils = require('@woowacourse/mission-utils');

const Console = {
  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  },

  print(...messages) {
    return messages.forEach(message => MissionUtils.Console.print(message));
  },

  close() {
    return MissionUtils.Console.close();
  },
};

module.exports = Console;
