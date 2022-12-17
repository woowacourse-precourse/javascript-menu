const { Console } = require("@woowacourse/mission-utils");

const CoachValidation = {
  validateCoach(name) {
    this.checkString(name);
    return this.checkString(name);
  },

  checkString(name) {
    const notString = !isNaN(name);
    try {
      if (notString) throw new Error("[ERROR] 문자만 입력해 주세요.");
    } catch (e) {
      Console.print(e.message);
    }
    return notString;
  },
};

module.exports = CoachValidation;
