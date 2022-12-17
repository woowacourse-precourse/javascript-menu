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
  readCoachesAllergies(callback, i, names) {
    Console.readLine(INPUT_MSG.ALLERGY(names[i]), input => {
      try {
        const allergies = Array.from(input.split(','));
        callback(i, allergies, names);
      } catch (e) {
        Console.print(e.message);
        this.readCoachesAllergies(callback, i, names);
      }
    });
  },
};
module.exports = InputView;
