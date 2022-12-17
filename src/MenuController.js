const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Crew = require('./Crew');
const Utils = require('./Utils');
const MissionUtils = require('@woowacourse/mission-utils');
const { CATEGORY, DAY } = require('./Sample');
const Constant = require('./Constant');
const ErrorHandler = require('./ErrorHandler');
const Validate = require('./Validate');

class MenuController {
  crews = [];
  count = 1;

  constructor() {
    this.outputView = new OutputView(this);
    this.inputView = new InputView(this);
  }

  start() {
    const makeCewFn = names => this.makingCrews(names);
    this.outputView.initialMessage(Constant.INITMESSAGE);
    this.inputView.readCrewNames(makeCewFn);
  }

  makingCrews(names) {
    const validTarget = () => Validate.crewName(names);
    const errorCallback = () => this.start();
    ErrorHandler.crewNames(validTarget, errorCallback);
    const crewList = Utils.stringConvertor(names);
    crewList.forEach(name => this.crews.push(new Crew(name)));
    this.setCanNotEat();
  }

  setMenuCategory() {
    const crews = this.crews;
    DAY.forEach(day => {
      const category = CATEGORY[MissionUtils.Random.pickNumberInRange(1, 5)];
      crews.forEach(crew => crew.setMenu(category));
    });

    this.setDetailMenu();
  }

  setCanNotEat() {
    const crews = this.crews;
    const callback = this.setMenuCategory.bind(this);
    this.inputView.readCanNotEat(crews, 0, callback);
  }

  setDetailMenu() {
    const crews = this.crews;
    crews.forEach(crew => crew.setDetailMenu());

    this.print();
  }

  print() {
    this.outputView.print(Constant.MENU_RESULT);
    this.outputView.print(Constant.DAYS);

    const category = this.crews[0].getCategory();
    this.outputView.print(`[ 카테고리 | ${category} ]`);

    this.crews.forEach(crew => crew.printMenu(this.outputView.print));
    this.outputView.printEnd(Constant.END_RECOMAND);
    MissionUtils.Console.close();
  }
}

module.exports = MenuController;
