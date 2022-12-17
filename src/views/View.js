const Input = require('./Input');
const Output = require('./Output');
const { Console } = require('@woowacourse/mission-utils');

const View = {
  Input,

  Output,

  ErrorMsg(error) {
    Console.print(error);
  },
};

module.exports = View;
