const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  reEnter(error, readMethod, callback, Argument) {
    Console.print(error.message);
    readMethod(callback, Argument);
  },

  readName(callback) {
    Console.readLine('\n코치의 이름을 입력해 주세요. (, 로 구분)\n', (name) => {
      try {
        Validator.name(name);
        callback(name);
      } catch (error) {
        InputView.reEnter(error, InputView.readName, callback);
      }
    });
  },

  readDislikeFood(callback, coach) {
    Console.readLine(`\n${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (food) => {
      try {
        Validator.dislikeFood(food);
        callback(food);
      } catch (error) {
        InputView.reEnter(error, InputView.readDislikeFood, callback, coach);
      }
    });
  },
};

module.exports = InputView;
