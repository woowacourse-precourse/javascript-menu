const Validator = {
  /**
   * 코치 이름 길이 유효성을 검사한다.
   * @param {string} name 코치 이름
   */
  validateCoachNameLength(name) {
    const len = name.length;
    if (len < 2) throw '[ERROR] 코치이름은 최소 2글자 이상 입력해야 합니다.';
    if (len > 4) throw '[ERROR] 코치이름은 최대 4글자 이하 입력해야 합니다.';
  },

  validateCoachNameCount() {},

  validateFoodNameCount() {},

  validateFoodName() {},
};

module.exports = Validator;
