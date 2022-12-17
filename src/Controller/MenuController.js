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

    // console.log(coaches);
    // coaches.forEach((coach, index) => {
    //   console.log(index);
    //   InputView.readCantEat(coach, (cantEat) => {
    //     this.menuModel.setCantEat(cantEat);
    //     if (coaches.length - 1 === index) this.getRecommends();
    //   });
    // });
  };

  getRecommends = () => {
    console.log("hi");
  };
}

module.exports = MenuController;
