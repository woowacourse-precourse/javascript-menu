const { Console } = require("@woowacourse/mission-utils");

const CoachValidation = {
  validateCoach(name) {
    const string = this.checkString(name);
    const length = this.checkStringLength(name);
    const coachLength = this.checkCoachLength(name);
    const correctName = string || length || coachLength;
    return correctName;
  },

  checkString(name) {
    const notString = !isNaN(name);
    try {
      if (notString) throw new Error("[ERROR] 문자만 입력해 주세요.");
    } catch (e) {
      Console.print(e.message);
      return true;
    }
    return false;
  },

  checkStringLength(name) {
    const nameArray = name.split(",").map((name) => {
      return name;
    });

    try {
      for (i = 0; i < nameArray.length; i++) {
        if (nameArray[i].length < 2 || nameArray[i].length > 4)
          throw new Error("[ERROR] 코치 이름은 최소 2글자 ~ 최대 4글자입니다.");
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
    return false;
  },

  checkCoachLength(name) {
    const nameArray = name.split(",").map((name) => {
      return name;
    });

    try {
      for (i = 0; i < nameArray.length; i++) {
        if (nameArray.length < 2 || nameArray.length > 5)
          throw new Error("[ERROR] 코치의 수는 최소 2명 ~ 최대 5명입니다.");
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
    return false;
  },
};

module.exports = CoachValidation;
