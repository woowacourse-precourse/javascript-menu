const { print } = require('../utils/mission');

const OutputView = {
  printStart(message) {
    print(message);
  },

  printResult() {
    //메뉴 추천 결과를 출력
  },

  printError(error) {
    print(error);
  },
};

module.exports = OutputView;
