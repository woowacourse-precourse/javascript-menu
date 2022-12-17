const { Console } = require('@woowacourse/mission-utils');
const UserError = require('../util/UserError');
const Message = require('../constant/PrintMessage');
const CoachNameList = require('../model/CoachNameList');

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

  validateNameList(nameList) {
    try {
      const inputNameList = new CoachNameList(nameList);
    } catch (error) {
      this.isUserError(error);
      Console.print(error.message);
      this.readCoachName();
    }
  },

  isUserError(error) {
    if (error instanceof UserError) {
      return;
    }
    throw error;
  },
};

module.exports = InputView;
