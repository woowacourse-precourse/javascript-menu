const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;

const OutputView = {
  printGameStart() {
    Console.print('점심 메뉴 추천을 시작합니다.');
  },

  printGameInfoResult() {
    Console.print('메뉴 추천 결과입니다.');
  },

  printWeekInfo() {
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
  },

  printCategories(categoriesNameArray) {
    Console.print(
      `[ 카테고리 | ${categoriesNameArray[0]} | ${categoriesNameArray[1]} | ${categoriesNameArray[2]} | ${categoriesNameArray[3]} | ${categoriesNameArray[4]} ]`
    );
  },

  printRecommendations(coachFoodRecommendationArray) {
    for (let i = 0; i < coachFoodRecommendationArray.length; i++) {
      Console.print(`[ ${coachFoodRecommendationArray[i]} ]`);
    }
  },

  printGameEnd() {
    Console.print('추천을 완료했습니다.');
  },
};

module.exports = OutputView;
