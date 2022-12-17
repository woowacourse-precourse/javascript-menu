const MissionUtils = require('@woowacourse/mission-utils');

class InputUI {
  readLine(callback) {
    MissionUtils.Console.readLine('', (answer) => {
      callback(answer);
    });
  }
}
