const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./Constant");

const InputVeiew = {
  readCoachName(actWithCoachName) {
    Console.readLine(MESSAGE.askName, actWithCoachName);
  },

  readCoachPickyFood(name, actWithPickyFood) {
    Console.readLine(MESSAGE.askPickyFood(name), (foods) => {
      actWithPickyFood(name, foods);
    });
  },
};

module.exports = InputVeiew;
