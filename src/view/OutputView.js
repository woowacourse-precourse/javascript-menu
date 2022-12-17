const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/Message');

const  { PROCESS_CONSTANTS } = require('../constants/Setting');
const Category = require('../model/Category');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.process.startNotice);
  },

  printMenu(coachRepository, recommendWeeklyMenu) {
    Console.print(MESSAGE.process.printMenuNotice);
    OutputView.printWeeks();
    OutputView.printCategory(recommendWeeklyMenu);
    OutputView.printMenuPerCrew(coachRepository);
  },

  printMenuPerCrew(coachRepository) {
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

  printWeeks() {
    Console.print(PROCESS_CONSTANTS.menuStart
      + [PROCESS_CONSTANTS.headerWeeks,
        ...PROCESS_CONSTANTS.weeks].join(PROCESS_CONSTANTS.menuDivision)
      + PROCESS_CONSTANTS.menuEnd);
  },

  printCategory(recommendWeeklyMenu) {
    Console.print(
      PROCESS_CONSTANTS.menuStart
      + [PROCESS_CONSTANTS.headerCategory,
        ...recommendWeeklyMenu.getWeeklyCategory()].join(PROCESS_CONSTANTS.menuDivision)
      + PROCESS_CONSTANTS.menuEnd,
    );
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
