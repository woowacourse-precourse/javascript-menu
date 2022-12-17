const { OUTPUT_MESSAGES } = require('../constants/messages');
const OutputView = require('../view/OutputView');

class MenuController {
  constructor() {}

  start() {
    OutputView.printStart(OUTPUT_MESSAGES.start);
  }
}

module.exports = MenuController;
