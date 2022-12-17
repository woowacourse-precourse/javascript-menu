const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const ExceptionHandler = require('../Util/ExceptionHandler');

const IOView = {
  InputView,
  OutputView,
  Quit: {
    app() {
      Console.close();
    },

    byException(errorMessage) {
      Console.close();
      ExceptionHandler(errorMessage);
    },
  },
};

module.exports = IOView;
