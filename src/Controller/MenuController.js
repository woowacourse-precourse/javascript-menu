const { ANNOUNCEMENT_MESSAGE } = require("../Constant/Constant");
const MenuModel = require("../Model/MenuModel");
const ShuffleMenu = require("../Utils/ShuffleMenu");
const InputView = require("../View/Inputview");
const OutputView = require("../View/OutputView");
const StaticView = require("../View/StaticView");

class MenuController {
  constructor() {
    this.menuModel = new MenuModel();
  }

  start() {
    this.printStart();
  }

  printStart() {
    StaticView.print(ANNOUNCEMENT_MESSAGE.START);
    this.getCoaches();
  }

  getCoaches = () => {
    InputView.readCoaches((coaches) => {
      this.menuModel.setCoaches(coaches);
      this.getCantEat(coaches);
    });
  };

  getCantEat = (coaches) => {
    InputView.readCantEat(
      coaches,
      (cantEat, count) => {
        this.menuModel.setCantEat(cantEat);
        if (coaches.length === count) this.getRecommends();
      },
      0
    );
  };

  getRecommends = () => {
    this.printResultAnnounce();
    const recommendResults = this.menuModel.getCoachesRecommends();
    const coaches = this.menuModel.getCoaches();
    OutputView.printResult(recommendResults, coaches);
    this.printFinish();
  };

  printResultAnnounce = () => {
    StaticView.print(ANNOUNCEMENT_MESSAGE.RESULT);
  };

  printFinish = () => {
    StaticView.print(ANNOUNCEMENT_MESSAGE.FINISH);
  };
}

module.exports = MenuController;
