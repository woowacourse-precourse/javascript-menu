/* eslint-disable class-methods-use-this */
const { Console } = require('@woowacourse/mission-utils');
const Category = require('../domains/Category');
const Coach = require('../domains/Coach');
const Menu = require('../domains/Menu');

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

  /**
   * @param {string[]} days
   * @param {Category[]} categories
   * @param {Coach[]} coaches
   * @param {Menu[][]} menuTable
   */
  printSuggestionTable(days, categories, coaches, menuTable) {
    this.print('메뉴 추천 결과입니다.');
    this.print(`[ ${['구분', ...days].join(' | ')} ]`);
    this.print(`[ ${['카테고리', ...categories.map((category) => category.getName())].join(' | ')} ]`);
    menuTable.forEach((menus, index) => {
      this.print(`[ ${[coaches[index].getName(), ...menus.map((menu) => menu.getName())].join(' | ')} ]`);
    });
  }
}

module.exports = OutputView;
