const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./Constant");

const InputVeiew = {
  readCoachName(actWithCoachName) {
    Console.readLine(MESSAGE.askName, actWithCoachName);
  },

  readCoachPickyFoods(coach, actWithPickyFoods) {
    console.log("yougotin");
    Console.readLine(MESSAGE.askPickyFood(coach.getName()), (foods) => {
      console.log("what");
      actWithPickyFoods(coach, foods);
    });
  },
};

module.exports = InputVeiew;
