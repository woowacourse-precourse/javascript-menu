const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  //서비스 시작 문구 출력
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },
};

module.exports = OutputView;
