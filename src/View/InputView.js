const { Console } = require("@woowacourse/mission-utils");
const { ANNOUNCEMENT_MESSAGE } = require("../Constant/Constant");
const Validation = require("../Utils/Validation");

const InputView = {
  readCoaches(callback) {
    Console.readLine(ANNOUNCEMENT_MESSAGE.GET_COACH_NAMES, (userInput) => {
      const coachesArr = userInput.split(",");
      Validation.isCoaches(coachesArr);
      callback(coachesArr);
    });
  },

  readCantEat(coaches, callback, count) {
    Console.readLine(
      `${coaches[count]}${ANNOUNCEMENT_MESSAGE.GET_CANT_EAT}`,
      (userInput) => {
        const cantEatArr = userInput.split(",");
        Validation.isCantEat(cantEatArr);
        const currentCount = count + 1;
        callback(userInput, currentCount);
        if (currentCount < coaches.length)
          this.readCantEat(coaches, callback, currentCount);
      }
    );
  },
};

module.exports = InputView;
