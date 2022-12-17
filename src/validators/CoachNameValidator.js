const CoachNameValidator = {
  MIN_COACH_COUNT: 2,
  MAX_COACH_COUNT: 5,

  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 4,

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

  isInvalidCoachCount(coachNameList) {
    return coachNameList.length < this.MIN_COACH_COUNT || coachNameList.length > this.MAX_COACH_COUNT;
  },

  isInvalidCoachNameLength(coachNameList) {
    return coachNameList.some(
      coachName => coachName.length < this.MIN_NAME_LENGTH || coachName.length > this.MAX_NAME_LENGTH,
    );
  },

  hasDuplicateCoach(coachNameList) {
    return coachNameList.length !== new Set(coachNameList).size;
  },
};

module.exports = CoachNameValidator;
