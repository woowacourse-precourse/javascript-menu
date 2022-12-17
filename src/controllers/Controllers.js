const Coach = require('../models/Coach');
const { Output, Input } = require('../views/View');

class Controller {
  init() {
    Output.printInit();
    this.getCoachNameList();
  }

  getCoachNameList() {
    Input.readCoachNameList((coachNameList) => {
      this.checkCoachNameList(coachNameList);
    });
  }

  checkCoachNameList(coachNameList) {
    const validation = Coach.validateCoachNameList(coachNameList);
    if (validation === false) return this.getCoachNameList();
  }
}

module.exports = Controller;
