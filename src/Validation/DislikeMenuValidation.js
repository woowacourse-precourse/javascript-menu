const { Console } = require("@woowacourse/mission-utils");

const DislikeMenuValidation = {
  validateMenu(menu) {
    const string = this.checkString(menu);
    const coachLength = this.checkMenuLength(menu);
    const correctName = string || coachLength;
    return correctName;
  },

  checkString(menu) {
    const notString = !isNaN(menu);
    try {
      if (notString) throw new Error("[ERROR] 문자만 입력해 주세요.");
    } catch (e) {
      Console.print(e.message);
      return true;
    }
    return false;
  },

  checkMenuLength(menu) {
    const nameArray = menu.split(",").map((menu) => {
      return menu;
    });

    try {
      for (i = 0; i < nameArray.length; i++) {
        if (nameArray.length > 2)
          throw new Error(
            "[ERROR] 못먹는 메뉴의 수는 최소 0개 ~ 최대 2개입니다."
          );
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
    return false;
  },
};

module.exports = DislikeMenuValidation;
