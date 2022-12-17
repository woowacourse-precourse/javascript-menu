const { GAME_MESSAGES } = require("../Utils/Constants");
const { NAME } = GAME_MESSAGES;
const { readLine, print } = require("../Utils/MissionUtils");
const Validator = require("../Utils/Validator");

const InputView = {
  /**
   * 메뉴 추천을 받을 코치의 이름을 입력받는다.
   */
  readCoachName() {
    readLine(NAME, (name) => {
      try {
        name = name.split(",");
        Validator.notEnoughPeople(name);
        Validator.inappropriateName(name);
      } catch (error) {
        print(error);
        this.readCoachName();
      }
    });
  },
};

module.exports = InputView;
