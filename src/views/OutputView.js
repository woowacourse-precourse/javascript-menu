const MissionUtils = require("@woowacourse/mission-utils");

const {
	MENU_RECOMMEND_START,
  COACH_NAME_INPUT,
  UNABLE_TO_EAT,
  RECOMMEND_COMPLETE,
  RESULT_MENU_RECOMMEND,
  DIVISION_DAY,
  CATEGORY,
	KOREAN_FOOD,
  JAPANESE_FOOD,
  CHINESE_FOOD,
  ASIAN_FOOD,
  AMERICA_FOOD,
  START_BRACKET,
  CLOSE_BRACKET} = require("../utils/constant")
const OutputView = {

  recommendStart(){
    MissionUtils.Console.print(MENU_RECOMMEND_START)
  },

  printResult(dayCategoryTo, resultTo){
		MissionUtils.Console.print(RESULT_MENU_RECOMMEND)
		MissionUtils.Console.print(DIVISION_DAY)
		MissionUtils.Console.print(CATEGORY + dayCategoryTo.join(" | ") + CLOSE_BRACKET)
		resultTo.map((result)=>{
			MissionUtils.Console.print(START_BRACKET + result.join(" | ") + CLOSE_BRACKET)
		})
		MissionUtils.Console.print(RECOMMEND_COMPLETE)
	}
}

module.exports = OutputView;