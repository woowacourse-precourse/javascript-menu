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
      [ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]
      [ 카테고리 | ${categories.join(' | ')}]`)
    );

    result.pickResult.forEach((currentData) => {
      Console.print(`[ ${currentData.join(' | ')} ]`);
    });
  },
};

module.exports = OutputView;

/*OutputView.printResult({
  categories: [1, 2, 3, 4, 5],
  pickResult: [
    ['포비', '규동', '우동', '물', '음료', '사이다'],
    ['몰루', '1', '2', '3', '4', '5'],
  ],
});*/
