const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printServiceStartMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },

  printRecommendResult(result) {
    Console.print('메뉴 추천 결과입니다.');
    Object.entries(result).forEach(([key, value]) => {
      Console.print(`[ ${key} | ${value.join(' | ')} ]`);
    });
    Console.print('추천을 완료했습니다.');
    // Console.close();
  },
};

module.exports = OutputView;
