const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class MenuController {
  start() {
    OutputView.printStart();
    this.inputCoachName();
  }

  inputCoachName() {
    const nameList = InputView.readCoachName();
    this.inputNoMenu(nameList);
  }

  inputNoMenu(nameList) {
    const coachList = nameList.split(',');
    const noMenuAllList = {};
    coachList.forEach(coach => {
      const noMenus = InputView.readNoMenu(coach);
      noMenuAllList[coach] = noMenus;
    });
    console.log('no', noMenuAllList);
  }
}

module.exports = MenuController;
