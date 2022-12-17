const { Console } = require('@woowacourse/mission-utils');
const { CATEGORY_NAME } = require('../constant/Constant');
const Trimmer = require('../Trimmer');

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printResult(result) {
    const categories = result.categories.map((category) => CATEGORY_NAME[category]);
    Console.print(
      Trimmer.templateTrim(`
      메뉴 추천 결과입니다.
      [ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]
      [ 카테고리 | ${categories.join(' | ')} ]`)
    );

    result.pickResult.forEach((currentData) => {
      Console.print(`[ ${currentData.join(' | ')} ]`);
    });
  },

  close() {
    Console.close();
  },
};

module.exports = OutputView;
