const OutputView = require("./OutputView");

const checkCoachNumber = (index) => {
  try {
    if (index > 5 || index < 2) throw new Error();
  } catch {
    OutputView.printCoachNumberError();
    return true;
  }
};

module.exports = {
  checkCoachNumber,
};
