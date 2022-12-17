const { Console } = require('@woowacourse/mission-utils');

const InputErrorHandler = (validate, input) => {
  try {
    validate(input);
    return true;
  } catch ({ message }) {
    Console.print(message);
    return false;
  }
};

module.exports = InputErrorHandler;
