const InputView = require("./InputView");

class MenuController {
  constructor(SAMPLE) {
    this.SAMPLE = SAMPLE;
    this.coach = [];
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
      this.coachIndex++;
      if(this.coachIndex === this.coach.length) {
        return 
      }
      this.readEachCoachAvoidMenu(this.coach[this.coachIndex])
    });
  }
}

module.exports = MenuController;
