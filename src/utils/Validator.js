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

  /**
   * 코치 이름 개수 유효성을 검사한다.
   * @param {stirng[]} names 코치 이름 목록
   */
  validateCoachNameCount(names) {
    const size = names.length;
    if (size < 2) throw '[ERROR] 코치는 최소 2명 이상 입력해야 합니다.';
    if (size > 5) throw '[ERROR] 코치는 최대 5명 이하 입력해야 합니다.';
  },

  validateFoodName() {},

  validateFoodNameCount() {},
};

module.exports = Validator;
