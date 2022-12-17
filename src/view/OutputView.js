const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {

  printStartMessage() {
    MissionUtils.Console.print("점심 메뉴 추천을 시작합니다.\n")
  },

  printEndMessage() {
    MissionUtils.Console.print("추천을 완료했습니다.")
  },

    
  /**
   * 매뉴 추천 결과를 출력한다.
   * @param {string[]} recommendedCategoryList 요일별 추천된 메뉴 카테고리 명/번호 가 들어간 리스트를 전달 받는다.
   * @param {{name:string, recommendedMenuList:string[]}[]} recommendedCoachMenuList 코치의 이름과 추천 메뉴 리스트가 들어간 객체를 전달 받는다. 
   */

  printRecommendedMenusResult(recommendedCategoryList,recommendedCoachMenuList) {

    MissionUtils.Console.print("메뉴 추천 결과입니다.")
    MissionUtils.Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]")
    MissionUtils.Console.print(`[ 카테고리 | ${recommendedCategoryList.join(' | ')} ]`)
    recommendedCoachMenuList.map((coachMenu) => {
      MissionUtils.Console.print(`[ ${coachMenu.name} | ${coachMenu.recommendedMenuList.join(' | ')} ]`)
    })
  }

};

module.exports = OutputView;