const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printRecommendMenuStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printRecommendMenuAllDone() {
    Console.print('추천을 완료했습니다.');
  },

  printRecommendResult() {
    Console.print('메뉴 추천 결과입니다.');
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },

  printCategory(category) {
    Console.print(`[ 카테고리 | ${category.join(' | ')} ]`);
  },
};

module.exports = { OutputView };
