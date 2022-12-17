const MissionUtils = require('@woowacourse/mission-utils');
const Validator = require('../Validator');
const { ValidConfig, Message } = require('../Config');

const read = (message) => {
  let input;
  MissionUtils.Console.readLine(
    message,
    (answer) => { input = answer.trim().split(ValidConfig.SEPARATOR); },
  );
  return input;
};

const InputView = {
  readNames() {
    const input = read(Message.ENTER_NAME);
    Validator.validateCoachNames(input);
    return input;
  },

  readCannotEatMenus(name) {
    const input = read(Message.enterCannotEat(name));
    Validator.validateCannotEat(input);
    return input;
  },
};

module.exports = InputView;
