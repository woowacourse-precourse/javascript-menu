const InputView = require("./InputView");
const RandomGeneration = require("./RandomGeneration");
const Validator = require("./Validator");

class MenuService {
  inputCoachName() {
    const callback = (coachName) => {
      const coachNameArr = coachName.split(",");
      const coachNums = coachNameArr.length;
      if (!Validator.readCoachName(coachName, coachNameArr)) return InputView.readCoachName(callback);

      this.inputInedibleMenu(coachNameArr[0]);
    };
    InputView.readCoachName(callback);
  }

  inputInedibleMenu(coachNameArr) {
    const callback = (inedibleMenu) => {
      if (!Validator.readInedibleMenu(inedibleMenu)) return InputView.readInedibleMenu(callback, coachName);
      InputView.readInedibleMenu(callback, coachNameArr[0]);
      RandomGeneration.recommendCategory();
    };
    InputView.readInedibleMenu(callback, coachNameArr);
  }
}

module.exports = MenuService;
