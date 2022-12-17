const MissionUtils = require('@woowacourse/mission-utils');
const OutputUI = require('./OutputUI');

class InputUI {
  constructor() {
    this.output = new OutputUI();
  }
  readLine(callback, message = '') {
    if (message !== '') {
      this.output.print(message);
    }
    MissionUtils.Console.readLine('', (answer) => {
      callback(answer);
    });
  }
}

module.exports = InputUI;
