const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MSG } = require('./Constant');

const InputView = {
  readCoachName(callback) {
    Console.readLine(INPUT_MSG.NAME, input => {
      try {
        const names = Array.from(input.split(','));
        callback(names);
      } catch (e) {
        Console.print(e.message);
        this.readCoachName(callback);
      }
    });
  },
};
module.exports = InputView;
