const MissionUtils = require('@woowacourse/mission-utils');
const OutputUI = require('./OutputUI');

class InputUI {
  constructor() {
    this.output = new OutputUI();
  }
  readCoachNames(callback) {
    this.output.print('코치의 이름을 입력해 주세요. (, 로 구분)');
    MissionUtils.Console.readLine('', (answer) => {
      callback(answer);
    });
  }
}

module.exports = InputUI;
