const { Console } = require('@woowacourse/mission-utils');
const { DAYS } = require('./utils/constants');

const OutputView = {
  //서비스 시작 문구 출력
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printResult(category, coachMenu) {
    Console.print('메뉴 추천 결과입니다.');
    Console.print('[ ' + `${DAYS.join(' | ')}` + ' ]');
    Console.print('[ ' + `${category.join(' | ')}` + ' ]');
    coachMenu.map((el) => {
      Console.print('[ ' + `${el.join(' | ')}` + ' ]');
    });
    Console.print('추천을 완료했습니다.');
    Console.close();
  },
};

module.exports = OutputView;
