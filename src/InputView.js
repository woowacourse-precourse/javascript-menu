const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./Constant");

const InputVeiew = {
  readCoachName(actWithCoachName) {
    Console.readLine(MESSAGE.askName, actWithCoachName);
  },

  readCoachPickyFoods(name, actWithPickyFoods) {
    Console.readLine(MESSAGE.askPickyFood(name), (foods) => {
      actWithPickyFoods(name, foods);
    });
  },
};

module.exports = InputVeiew;
