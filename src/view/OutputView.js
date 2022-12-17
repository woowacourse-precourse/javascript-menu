const { Console } = require('@woowacourse/mission-utils');
const { CATEGORY_NAME } = require('../constant/Constant');
const Trimmer = require('../Trimmer');

const OutputView = {
  printMessage(message) {
    Console.print(message);
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
