const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/constants');

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  pirntNewLine() {
    Console.print('');
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printResult(coaches) {
    Console.print(OUTPUT_MESSAGE.result);
    Console.print(OUTPUT_MESSAGE.day);
    Console.print(OUTPUT_MESSAGE.category);
    coaches.forEach((coach) => {
      const name = coach.getName();
      Console.print(`[ ${name} | ${coach.getMenus().join(' | ')} ]`);
    });
    Console.print(OUTPUT_MESSAGE.end);
    Console.close();
  },
};

module.exports = OutputView;
