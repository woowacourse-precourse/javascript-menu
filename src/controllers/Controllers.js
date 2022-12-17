const { Output, Input } = require('../views/View');

class Controller {
  init() {
    Output.printInit()
  }

  getCoachNameList() {
    Input.readCoachNameList((CoachNameList) => {})
  }
}

module.exports = Controller;
