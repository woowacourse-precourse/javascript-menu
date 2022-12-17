const CoachNameValidator = {
  MIN_COACH_COUNT: 2,
  MAX_COACH_COUNT: 5,

  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 4,

  /**
   * 코치의 이름에 대한 유효성을 검사한다.
   * @param {string} hateMenusInput 코치 이름 목록 입력값
   * @throws 유효한 코치 수가 아닌 경우 error
   * @throws 코치 이름의 길이가 유효하지 않은 경우  error
   * @throws 중복된 코치가 존재하는 경우 error
   */
  validate(coachNamesInput) {
    const coachNameList = coachNamesInput.split(',');
    if (this.isInvalidCoachCount(coachNameList)) {
      throw new Error(
        `[ERROR] 코치는 ${this.MIN_COACH_COUNT}명 이상, ${this.MAX_COACH_COUNT}명 이하로 입력해야 합니다.`,
      );
    }

    if (this.isInvalidCoachNameLength(coachNameList)) {
      throw new Error(
        `[ERROR] 코치의 이름은 ${this.MIN_NAME_LENGTH}글자 이상, ${this.MAX_NAME_LENGTH}글자 이하여야 합니다.`,
      );
    }

    if (this.hasDuplicateCoach(coachNameList)) {
      throw new Error(`[ERROR] 중복된 코치 이름이 존재합니다.`);
    }
  },

  /**
   * 유효한 코치 수인지 검사하는 메서드
   * @param {string[]} coachNameList
   * @returns {boolean} 유효하지 않은 코치 수인 경우 true를 반환한다.
   */
  isInvalidCoachCount(coachNameList) {
    return coachNameList.length < this.MIN_COACH_COUNT || coachNameList.length > this.MAX_COACH_COUNT;
  },

  /**
   * 코치 이름의 길이가 유효한지 검사하는 메서드
   * @param {string[]} coachNameList
   * @returns {boolean} 코치 이름의 길이가 유효하지 않은 경우 true를 반환한다.
   */
  isInvalidCoachNameLength(coachNameList) {
    return coachNameList.some(
      coachName => coachName.length < this.MIN_NAME_LENGTH || coachName.length > this.MAX_NAME_LENGTH,
    );
  },

  /**
   * 중복된 코치가 존재하는지 검사하는 메서드
   * @param {string[]} coachNameList
   * @returns {boolean} 중복된 코치가 존재하는 경우 true를 반환한다.
   */
  hasDuplicateCoach(coachNameList) {
    return coachNameList.length !== new Set(coachNameList).size;
  },
};

module.exports = CoachNameValidator;
