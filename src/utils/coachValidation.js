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

const isCoachesNumberValid = (coaches) => {
  if (!isCoachesNumberGreaterThanOrEqualTwo(coaches)) {
    OutputView.print(ERROR_MESSAGE.coachesNumberGreaterThanOrEqualTwo);
    throw new Error(ERROR_MESSAGE.coachesNumberGreaterThanOrEqualTwo);
  }
  if (!isCoachesNumberLessThanOrEqualFive(coaches)) {
    OutputView.print(ERROR_MESSAGE.coachesNumberLessThanOrEqualFive);
    throw new Error(ERROR_MESSAGE.coachesNumberLessThanOrEqualFive);
  }
};

const isNameValid = (name) => {
  if (name.length < 2 || name.length > 4) {
    return false;
  }
  return true;
};

const isCoachesNameValid = (coaches) => {
  coaches.forEach((name) => {
    if (!isNameValid(name)) {
      OutputView.print(ERROR_MESSAGE.coachNameIsWeird);
      throw new Error(ERROR_MESSAGE.coachNameIsWeird);
    }
  });
};

const isValidCoaches = (answer) => {
  const coaches = answer.split(',');
  isCoachesNumberValid(coaches);
  isCoachesNameValid(coaches);
};

module.exports = {
  isValidCoaches,
};
