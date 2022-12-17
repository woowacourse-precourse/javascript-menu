const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Utils/Constants');

const OutputView = {
  startMessage() {
    Console.print(MESSAGE.startMessage);
  },

  printError(error) {
    Console.print(error);
  },

  printResult(category) {
    let cate = '';
    cate += `[ ${category.join(' | ')} ]\n`;
    
    Console.print(cate);
    
  },

  printResultMenu(name, menu) {
    let dd = '';
    dd += `[ ${name} | ${menu.join(' | ')} ]\n`;
    Console.print(dd);
    Console.print(`추천을 완료했습니다.`);
  }

};

module.exports = OutputView;
