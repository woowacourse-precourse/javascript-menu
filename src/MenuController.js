const SAMPLE = require("./Constants");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { makeRandomCategory, makeRandomMenu } = require("./util");

class MenuController {
  constructor() {
    this.coach = [];
    this.coachAvoidMenu = {};
    this.recommendMenu = [];
    this.coachEachMenu = {};
    this.coachIndex = 0;
  }

  readCoachNamesCallback() {
    InputView.readCoachNames((names) => {
      names.forEach((name) => this.coach.push(name));
      this.readEachCoachAvoidMenu(this.coach[0]);
    });
  }

  readEachCoachAvoidMenu(name) {
    InputView.readAvoidMenu(name, (menu) => {
      this.coachAvoidMenu[this.coach[this.coachIndex]] = menu;
      this.coachIndex++;
      console.log(this.coachAvoidMenu);
      if (this.coachIndex === this.coach.length) return this.recommendCategory();
      this.readEachCoachAvoidMenu(this.coach[this.coachIndex]);
    });
  }

  recommendCategory() {
      this.recommendedCategories = Array(5)
      .fill("")
      .map((item) => item + makeRandomCategory());
      this.coach.forEach((name) => {
        this.coachEachMenu[name] = this.recommendEachMenu();
      })
      this.makeResult()
  }

  recommendEachMenu() {
    this.recommendedMenu =  [];
    this.recommendedCategories.map((category) => {
      this.recommendedMenu.push(makeRandomMenu(category))
    })
    return this.recommendEachMenu;
  }

  makeResult(){
    OutputView.printResult(this.recommendedCategories, this.coachEachMenu, this.coach)
  }
}

module.exports = MenuController;
