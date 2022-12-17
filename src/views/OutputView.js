const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 메뉴 추천 시작 메시지를 출력한다.
   */
  printServiceStartMessage() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  /**
   * 에러 메시지를 출력한다.
   * @param {string} errorMessage 각종 에러에 해당하는 메시지
   */
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },

  /**
   * 메뉴 추천 결과를 출력한다.
   * @param {object} result
   */
  printRecommendResult(result) {
    Console.print('메뉴 추천 결과입니다.');
    Object.entries(result).forEach(([key, value]) => {
      Console.print(`[ ${key} | ${value.join(' | ')} ]`);
    });
    Console.print('추천을 완료했습니다.');
    Console.close();
  },
};

module.exports = OutputView;
