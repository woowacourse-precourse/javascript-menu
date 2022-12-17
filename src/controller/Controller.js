const Coach = require("../model/Coach")
const OutputView = require("../views/OutputView.js")
const InputView = require("../views/InputView");
const MissionUtils = require("@woowacourse/mission-utils");

class Controller{

  constructor(){
    this.model = new Coach()
  }

  gameStart(){
    OutputView.recommendStart();
    this.writeCoachName()
  }

  writeCoachName(){
    InputView.insertCoachName((coach)=>{
      this.model.coachName(coach)
      this.writeUnableToEat();
    })
  }

  writeUnableToEat(){
    InputView.unableToEat((menu)=>{
      this.model.coachUnableToEat(menu)
      if(this.model.coachNumberTo === (this.model.coachNamesTo.length)) this.choiceCategory()
      else this.writeUnableToEat()
    }, this.model.coachInputName)
  }

  choiceCategory(){
    this.model.categoryRandomChoice()
    this.inputCategory()
  }

  inputCategory(){
    this.model.insertCategory()
    OutputView.printResult(this.model.dayCategoryTo, this.model.resultTo)
    MissionUtils.Console.close();
  }
}

module.exports = Controller