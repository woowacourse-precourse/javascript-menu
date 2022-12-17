const MissionUtils = require("@woowacourse/mission-utils");
const Coach = require("../model/Coach")
const {
  COACH_NAME_INPUT,
  UNABLE_TO_EAT
  } = require("../utils/constant")

  const {
  coachValidate,
  unableToEatValidate
  } = require("../validationFunction")

const InputView = {
  insertCoachName(writeCoachName){
		MissionUtils.Console.readLine(COACH_NAME_INPUT,(name)=>{
      if(coachValidate(name)) return this.insertCoachName(writeCoachName);
			writeCoachName(name)
		});
	},

  unableToEat(writeUnableToEat, coach){
		MissionUtils.Console.readLine(`${coach}`+UNABLE_TO_EAT, (menu)=>{
      if(unableToEatValidate(menu)) return this.unableToEat(writeUnableToEat, coach);
			writeUnableToEat(menu)
		})
	}

}

module.exports = InputView;