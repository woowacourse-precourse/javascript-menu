const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  startMent() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  resultMent() {
    Console.print('\n메뉴 추천 결과입니다.\n[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
  },

  category(category) {
    Console.print(`[ 카테고리 | ${category} ]`);
  },

  listResult(coach, foodList) {
    Console.print(`[ ${coach} | ${foodList} ]`);
  },

  endMent() {
    Console.print('\n추천을 완료했습니다.');
    Console.close();
  },
};

module.exports = OutputView;
