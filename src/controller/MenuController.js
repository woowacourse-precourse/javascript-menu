const { readCoachesName } = require('../view/InputView');
const { printStart } = require('../view/OutputView');

class MenuController {
  start() {
    printStart();
    readCoachesName(this.checkCoachesName.bind(this));
  }

  checkCoachesName(names) {
    console.log(names);
  }
}

module.exports = MenuController;
