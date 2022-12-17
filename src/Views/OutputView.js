const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, DAYS, CATEGORY } = require('../Constants');

const OutputView = {

  printMessage(message) {
    Console.print(message);
  },

  printArrayForm(array, list) {
    let print = '';
    if (list) print += `${list} | `;
    print += array.join(' | ');
    Console.print(`[ ${print} ]`);
  },

  printResult(coaches, saveCategory) {
    this.printMessage(MESSAGE.RESULT);
    this.printArrayForm(DAYS, '구분');
    this.printArrayForm(saveCategory, '카테고리');
    coaches.forEach((coach) => this.printCoachesDailyMenu(coach));
    this.printMessage(MESSAGE.FINISH);
  },

  printCoachesDailyMenu(coach) {
    this.printArrayForm(coach.getDailyMenu(), coach.name);
  },
};

module.exports = OutputView;
