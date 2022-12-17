const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./modules/Constants');
const Validation = require('./modules/Validation');

const InputView = {
  readCoachesName() {
    Console.readLine(MESSAGE.ASK_COACH_NAME, (names) => {
      try {
        Validation.validateGroup(names);
        const coaches = names.split(',');
        coaches.forEach((name) => {
          Validation.validateName(name);
        });
      } catch (error) {
        console.log(error);
      }
    });
  },
};

module.exports = InputView;
