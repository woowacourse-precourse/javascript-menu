const InputView = require("./InputView");
const Validator = require("./Validator");

class MenuService {
  inputCoachName() {
    const callback = (coachName) => {
      const coachNameArr = coachName.split(",");
      const coachNums = coachNameArr.length;
      if (!Validator.readCoachName(coachName, coachNameArr)) return InputView.readCoachName(callback);
    };
    InputView.readCoachName(callback);
  }
}

module.exports = MenuService;
