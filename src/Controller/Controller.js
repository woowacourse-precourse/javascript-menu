const InputView = require("../View/InputView");
const OutputView = require("../View/Outputview");
const { Console } = require("@woowacourse/mission-utils");

class Controller {
  constructor(){
    this.coachesName = {}
    this.coachHateMenu = {}
    this.startCount = 0
    this.count = this.coachesName.length - 1//2
  }
  showgameStartGuide() {
    OutputView.printGameStartMessage()
    this.askCoachesName()
  }
  askCoachesName() {
    InputView.readCoachesName(this.saveCoachesName.bind(this));
  }
  saveCoachesName(coachesName) {
    this.coachesName = Object.values(coachesName); // [ 'a', 'b', 'c' ]
    this.askCoachesHateMenu()
  }

  askCoachesHateMenu() {
    if(this.coachesName[this.startCount]){
      InputView.readCoachHateMenu(this.coachesName[this.startCount], this.saveCoachHateMenu.bind(this));
    } else this.result()
  }
  saveCoachHateMenu(coachHateMenu) {
    this.coachHateMenu[this.coachesName[this.startCount]] = coachHateMenu
    Console.print(this.coachHateMenu)
    this.startCount++
    this.askCoachesHateMenu()
  }
  result()
  


  /*
  saveInput(넘겨받는인풋값){
    try{
      validation.input(넘겨받는인풋값);
      this.저장할인풋 = 넘겨받는인풋값;
      this.그다음단계호출
    } catch {
      // 다시 인풋값 받기
    }
  } */
}

module.exports = Controller;
