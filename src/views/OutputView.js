const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants');

const OutputView = {
  printEmptyLine() {
    Console.print('');
  },

  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },

  printResult() {
    Console.print(OUTPUT_MESSAGE.RESULT);
  },

  printDays() {
    Console.print(OUTPUT_MESSAGE.DAYS);
  },

  printCategories(categories) {
    const categoryString = categories.join(' | ');
    Console.print(`[ 카테고리 | ${categoryString} ]`);
  },

  printCoachMenus(coachMenus) {
    Console.print(coachMenus);
  },

  printFinish() {
    Console.print(OUTPUT_MESSAGE.FINISH);
  },
};

module.exports = OutputView;
