const { Console } = require('@woowacourse/mission-utils');
const SAMPLE = require('../constant/Menu');

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printError(error) {
    this.print(error);
  },

  printMenu(names, menu) {
    this.print('메뉴 추천 결과입니다.');
    const typeName = Object.keys(SAMPLE);
    const typelist = menu.map((day) => day[0][0]);
    this.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    this.print(
      `[ 카테고리 | ${typeName[typelist[0]]} | ${typeName[typelist[1]]} | ${
        typeName[typelist[2]]
      } | ${typeName[typelist[3]]} | ${typeName[typelist[4]]} ]`
    );
    const fullMenu = this.menuBoard();
    names.forEach((name, idx) => {
      const list = menu.map((ele) => {
        const indexNumber = ele[idx][0];
        const indexnum = ele[idx][1];
        return fullMenu[indexNumber][indexnum];
      });

      this.print(`[ ${name} | ${list[0]} | ${list[1]} | ${list[2]} | ${list[3]} | ${list[4]} ]`);
    });
    this.print('추천을 완료했습니다.');
  },

  menuBoard() {
    return Object.keys(SAMPLE).map((typeName) => SAMPLE[typeName].split(', '));
  },
};

module.exports = OutputView;
