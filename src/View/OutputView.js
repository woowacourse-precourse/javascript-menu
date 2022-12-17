const { Console } = require('@woowacourse/mission-utils');

const OutputView  = {
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다\n');
  },

  printResult() {
    Console.print('\n메뉴 추천 결과입니다.\n');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    Console.print('[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]');
    Console.print('[ 구구 | 김치찌개 | 스파게티 | 규동 | 짜장면 | 카오 팟 ]');
    Console.print('[ 제임스 | 제육볶음 | 라자냐 | 가츠동 | 짬뽕 | 파인애플 볶음밥 ]');
    Console.print('');
    Console.print('추천을 완료했습니다.');
    Console.close();
  }
};

module.exports = OutputView;
