const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, TABLE } = require('./lib/constants');

const OutputView = {
  printIntro() {
    this.printMessage(MESSAGE.INTRO);
  },

  printResult({ categoryTable, foodTable }) {
    this.printMessage(MESSAGE.MENU_RESULT);
    this.printMessage(TABLE.SECTION);
    this.printMessage(categoryTable);

    foodTable.forEach((table) => {
      this.printMessage(table);
    });

    this.printMessage(MESSAGE.OUTRO);
  },

  printMessage(message) {
    MissionUtils.Console.print(message);
  },

};

module.exports = OutputView;
