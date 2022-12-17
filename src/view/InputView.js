const { Console } = require('@woowacourse/mission-utils');
const Message = require('../constant/PrintMessage');

const InputView = {
  readCoachName() {
    let nameList = [];
    Console.readLine(Message.INPUT_NAME, answer => {
      Console.print(answer);
      this.validateNameList(answer);
      nameList = answer;
    });
    return nameList;
  },
};

module.exports = InputView;
