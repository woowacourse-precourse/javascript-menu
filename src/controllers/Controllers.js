const { Output, Input } = require('../views/View');

class Controller {
  init() {
    Output.printInit();
    this.getCoachNameList();
  }

  getCoachNameList() {
    Input.readCoachNameList((coachNameList) => {});
  }
}

module.exports = Controller;
