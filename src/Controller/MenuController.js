const { ANNOUNCEMENT_MESSAGE } = require("../Constant/Constant");
const MenuModel = require("../Model/MenuModel");
const InputView = require("../View/Inputview");
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
    InputView.readCoaches((userAnswer) => {
      this.menuModel.setCoaches(userAnswer);
      this.getCantEat();
    });
  };

  getCantEat = () => {
    console.log("hi");
  };
}

module.exports = MenuController;
