const InputView = require("./InputView");
const { makeRandomCategory } = require("./util");

class MenuController {
  constructor() {
    this.coach = [];
    this.coachAvoidMenu = {};
    this.recommendMenu = {};
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
      if (this.coachIndex === this.coach.length) return this.recommend();
      this.readEachCoachAvoidMenu(this.coach[this.coachIndex]);
    });
  }

  recommend() {
      this.recommendedCategories = Array(5)
      .fill("")
      .map((item) => item + makeRandomCategory());
      console.log(this.recommendedCategories)
  }
}

module.exports = MenuController;
