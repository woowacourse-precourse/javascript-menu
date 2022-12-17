const Coach = require("./Coach");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { checkCoachNumber } = require("./validation");

class MenuRecommendation {
  constructor() {
    this.coachs = [];
  }

  receiveCoachName(names) {
    console.log(names);

    names.split(",").forEach((name, index) => {
      this.coachs.push(new Coach(name));
    });

    if (checkCoachNumber(this.coachs.length)) {
      return InputView.readCoachName(this.receiveCoachName.bind(this));
    }

    console.log(this.coachs);
  }

  start() {
    OutputView.printStartText();

    InputView.readCoachName(this.receiveCoachName.bind(this));
  }
}

module.exports = MenuRecommendation;
