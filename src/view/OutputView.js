const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
    OutputView.printNewLine();
  },
  printRecommandResult(coaches) {
    Console.print('메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    Console.print('[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]');
    coaches.forEach((coach) => {
      Console.print(coach);
    });
  },
  printEnd() {
    Console.print('추천을 완료했습니다.');
    Console.close();
  },
  printNewLine() {
    Console.print('');
  },
};

module.exports = OutputView;
