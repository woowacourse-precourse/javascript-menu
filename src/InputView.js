const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./Constant");

const InputVeiew = {
  readCoachName(actWithCoachName) {
    Console.readLine(MESSAGE.askName, actWithCoachName);
  },

  readCoachPickyFoods(coach, actWithPickyFoods) {
    Console.readLine(MESSAGE.askPickyFood(coach.getName()), (foods) => {
      actWithPickyFoods(coach, foods);
    });
  },
};

module.exports = InputVeiew;
