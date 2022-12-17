const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Crew = require('./Crew');
const Utils = require('./Utils');
const MissionUtils = require('@woowacourse/mission-utils');
const { CATEGORY } = require('./Sample');

class MenuController {
  crews = [];
  count = 1;

  constructor() {
    this.outputView = new OutputView(this);
    this.inputView = new InputView(this);
  }

  start() {
    const callback = names => this.makingCrews(names);
    this.outputView.initialMessage('이니샬');
    this.inputView.readCrewNames(callback);
  }

  makingCrews(names) {
    const crewList = Utils.stringConvertor(names);
    crewList.forEach(name => this.crews.push(new Crew(name)));

    this.canNotEat();
    // this.recomandMenu();
  }

  recomandMenu() {
    const category = CATEGORY[MissionUtils.Random.pickNumberInRange(1, 5)];
    
    
    // console.log(category);
  }

  canNotEat() {
    const crews = this.crews;
    const callback = this.recomandMenu.bind(this);
    this.inputView.readCanNotEat(crews, 0, callback);
  }
}

module.exports = MenuController;
