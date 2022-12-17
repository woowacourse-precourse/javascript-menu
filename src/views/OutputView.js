/* eslint-disable class-methods-use-this */
const { Console } = require('@woowacourse/mission-utils');

class OutputView {
  /**
   * @param {string} message
   */
  print(message) {
    Console.print(message);
  }

  printDivider() {
    this.print('');
  }

  printHello() {
    this.print('점심 메뉴 추천을 시작합니다.');
  }

  printGoodbye() {
    this.print('추천을 완료했습니다.');
  }
}

module.exports = OutputView;
