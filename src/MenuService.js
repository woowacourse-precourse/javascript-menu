const InputView = require("./InputView");
const Validator = require("./Validator");

class MenuService {
  inputCoachName() {
    const callback = (coachName) => {
      const coachNameArr = coachName.split(",");
      const coachNums = coachNameArr.length;

      if (!Validator.readCoachName(coachName, coachNameArr)) return InputView.readCoachName(callback);

      coachNameArr.forEach((name) => {
        this.inputInedibleMenu(name);
      });
    };
    InputView.readCoachName(callback);
  }

  inputInedibleMenu(coachName) {
    const callback = (inedibleMenu) => {
      if (!Validator.readInedibleMenu(inedibleMenu)) return InputView.readInedibleMenu(callback);
    };
    InputView.readInedibleMenu(callback, coachName);
  }
}

module.exports = MenuService;
