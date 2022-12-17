const { Console } = require('@woowacourse/mission-utils');

const InputErrorHandler = (validate, catchFunc, nextFunc) => {
  try {
    validate();
    return true;
  } catch ({ message }) {
    Console.print(message);
    catchFunc(nextFunc);
    return false;
  }
};

module.exports = inputErrorHandler;
