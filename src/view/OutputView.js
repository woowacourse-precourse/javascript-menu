const { Console } = require('@woowacourse/mission-utils');
const Result = require('../domain/Result');
const MESSAGES = require('./messages');

const OutputView = Object.freeze({
  printStart() {
    Console.print(MESSAGES.start);
  },

  printResult(result) {
    if (!(result instanceof Result)) {
      throw new Error(`[개발자] Result 객체를 받아야합니다.`);
    }

    Console.print(MESSAGES.result);
    Console.print(MESSAGES.resultDays);
    Console.print(`[ ${MESSAGES.category} | ${result.getCategories().join(' | ')} ]`);
    result.coaches.forEach((coach) => {
      Console.print(`[ ${coach.getName()} | ${coach.getMenuList().join(' | ')} ]`);
    });
  },

  printEnd() {
    Console.print(MESSAGES.end);
    Console.close();
  },
});

module.exports = OutputView;
