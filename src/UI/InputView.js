const { GAME_MESSAGES } = require("../Utils/Constants");
const { NAME, CAN_NOT_EAT } = GAME_MESSAGES;
const { readLine, print } = require("../Utils/MissionUtils");
const Validator = require("../Utils/Validator");
const OutputView = require("./OutView");

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
        this.readHateMenu(name, 0);
      } catch (error) {
        print(error);
        this.readCoachName();
      }
    });
  },

  /**
   * 못 먹는 메뉴를 입력받는다.
   */
  readHateMenu(name, index) {
    readLine(`\n${name[index]}${CAN_NOT_EAT}`, (menu) => {
      try {
        Validator.notExistMenu(menu);
        Validator.tooMany(menu);
        index += 1;
        if (index === name.length) return;
        this.readHateMenu(name, index, menu);
      } catch (error) {
        print(error);
        this.readHateMenu(name, index);
      }
    });
  },
};

module.exports = InputView;
