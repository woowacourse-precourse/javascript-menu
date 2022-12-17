const { Console } = require('@woowacourse/mission-utils');
const Validate = require('../utils/validate');

const InputView = {
  readCoachName(callback) {
    Console.readLine('코치의 이름을 입력해주세요\n', (answer) => {
      callback(answer);
    });
  },

  readExceptionFoods(coach) {
    Console.readLine(`${coach.getCoachName()}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (answer) => {
      try {
        Validate.exceptionFoodsValidate(answer);
        coach.setExceoptionFoods(answer);
        Promise.resolve();
      } catch {
        this.readExceptionFoods(coach);
      }
      //   callback(coach, answer);
    });
  },
  //   readExceptionFoods(name, callback) {
  //     Console.readLine(`${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (answer) => {
  //       callback(answer);
  //     });
  //   },
};

module.exports = InputView;
