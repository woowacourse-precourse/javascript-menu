const MissionUtils = require("@woowacourse/mission-utils");

const {
  COACH_NAME_ERROR,
  COACH_NUMBER_ERROR,
  MENU_ERROR
} = require("./utils/constant")
const {
  coachNameCheck,
  coachNumberCheck,
  unableToEatCheck
} = require('./utils/validation')

const coachValidate = (number)=>{
  try{
    if(!coachNameCheck(number)) throw new Error(COACH_NAME_ERROR)

    if(!coachNumberCheck(number)) throw new Error(COACH_NUMBER_ERROR)
  }catch(error){
    MissionUtils.Console.print(error.message)
    return true;
  }
}

const unableToEatValidate = (number)=>{
  try{
    if(!unableToEatCheck(number)) throw new Error(MENU_ERROR)
  }catch(error){
    MissionUtils.Console.print(error.message)
    return true;
  }
}



module.exports = {
  coachValidate,
  unableToEatValidate
}