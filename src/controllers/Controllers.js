const Coach = require('../models/Coach');
const CoachList = require('../models/CoachList');
const { Output, Input } = require('../views/View');

class Controller {
  #coachList = new CoachList();

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
    this.makeCoach(coachNameList);
  }

  makeCoach(coachNameList) {
    coachNameList.split(',').forEach((coachName) => {
      this.#coachList.addCoach(coachName);
    });
  }
}

module.exports = Controller;
