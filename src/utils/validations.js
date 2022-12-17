const { OutputView } = require('../views/OutputView');
const { ERROR_MESSAGE } = require('./constants');

const isCoachesNumberGreaterThanOrEqualTwo = (coaches) => {
  if (coaches.length < 2) {
    return false;
  }
  return true;
};
const isCoachesNumberLessThanOrEqualFive = (coaches) => {
  if (coaches.length > 5) {
    return false;
  }
  return true;
};

const isValidCoaches = (answer) => {
  const coaches = answer.split(',');
  if (!isCoachesNumberGreaterThanOrEqualTwo(coaches)) {
    OutputView.print(ERROR_MESSAGE.coachesNumberGreaterThanOrEqualTwo);
    throw new Error(ERROR_MESSAGE.coachesNumberGreaterThanOrEqualTwo);
  }
  if (!isCoachesNumberLessThanOrEqualFive(coaches)) {
    OutputView.print(ERROR_MESSAGE.coachesNumberLessThanOrEqualFive);
    throw new Error(ERROR_MESSAGE.coachesNumberLessThanOrEqualFive);
  }
};
module.exports = {
  isValidCoaches,
};
