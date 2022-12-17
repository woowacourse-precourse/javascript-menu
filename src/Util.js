const { Console } = require('@woowacourse/mission-utils');

const catchError = (input, validation) => {
  try {
    return validation(input);
  } catch (error) {
    Console.print(error);
    return false;
  }
};

module.exports = { catchError };