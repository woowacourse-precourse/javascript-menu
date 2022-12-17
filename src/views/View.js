const Input = require('./Input');
const Output = require('./Output');
const { Console } = require('@woowacourse/mission-utils');

const View = {
  Input,

  Output,

  ErrorMsg(error) {
    Console.print(error);
  },

  end() {
    Console.print('\n추천을 완료했습니다.');
    Console.close();
  },
};

module.exports = View;
