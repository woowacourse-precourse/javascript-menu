const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/Message');

const  { PROCESS_CONSTANTS } = require('../constants/Setting');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.process.startNotice);
  },

  printMenu(coachRepository) {
    Console.print(MESSAGE.process.printMenuNotice);
    coachRepository.getCoachList().forEach(coach => {
      Console.print(
        PROCESS_CONSTANTS.menuStart
          + coach.getName()
          + PROCESS_CONSTANTS.menuDivision
          + coach.getWeeklyMenu().join(PROCESS_CONSTANTS.menuDivision)
          + PROCESS_CONSTANTS.menuEnd,
      );
    });
  },

  printQuit() {
    Console.print(MESSAGE.process.quitNotice);
    Console.close();
  },

  printError(error) {
    Console.print(error.message);
  },
};

module.exports = OutputView;
