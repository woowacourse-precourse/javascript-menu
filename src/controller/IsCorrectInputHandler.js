const { OutputView } = require('../view/OutputView');

const isCorrectInputHandler = (validateFunction, userInput) => {
  try {
    validateFunction(userInput);
    return true;
  } catch (error) {
    OutputView.printErrorMessage(error.message);
    return false;
  }
};

module.exports = { isCorrectInputHandler };
