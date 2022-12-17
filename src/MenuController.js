const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Crew = require('./Crew');
const Utils = require('./Utils');
const MissionUtils = require('@woowacourse/mission-utils');
const { CATEGORY, DAY } = require('./Sample');

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

  setMenuCategory() {
    const crews = this.crews;
    DAY.forEach(day => {
      const category = CATEGORY[MissionUtils.Random.pickNumberInRange(1, 5)];
      crews.forEach(crew => crew.setMenu(category));
    });

    this.setDetailMenu();
  }

  canNotEat() {
    const crews = this.crews;
    const callback = this.setMenuCategory.bind(this);
    this.inputView.readCanNotEat(crews, 0, callback);
  }

  setDetailMenu() {
    const crews = this.crews;
    crews.forEach(crew => crew.setDetailMenu());

    this.print()
  }

  print(){
    this.outputView.
  }
}

module.exports = MenuController;
