const { Console } = require('@woowacourse/mission-utils');
const UserError = require('../util/UserError');
const Message = require('../constant/PrintMessage');
const CoachNameList = require('../model/CoachNameList');
const NoMenuList = require('../model/NoMenuList');

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

  readNoMenu(coach) {
    const noMenuList = [];
    console.log('ca', coach);
    Console.readLine(`${coach}${Message.INPUT_NO_MENU}`, answer => {
      Console.print(answer);
      noMenuList.push(answer);
      console.log('li', noMenuList);
      this.validateNoMenuList(noMenuList);
      console.log('li2', noMenuList);
    });
    return noMenuList;
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

  validateNoMenuList(noMenuList) {
    try {
      console.log('trbe', noMenuList);
      const inputNoMenu = new NoMenuList(noMenuList[0]);
      console.log('tr');
    } catch (error) {
      this.isUserError(error);
      Console.print(error.message);
      this.readNoMenu();
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
