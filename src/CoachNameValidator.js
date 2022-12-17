const CoachNameValidator = {
  MIN_COACH_COUNT: 2,
  MAX_COACH_COUNT: 5,

  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 4,

  validate(coachNamesInput) {
    if (this.isInvalidCoachCount(coachNamesInput)) {
      throw new Error('[ERROR]');
    }

    if (this.isInvalidCoachNameLength(coachNamesInput)) {
      throw new Error('[ERROR]');
    }
  },

  isInvalidCoachCount(coachNamesInput) {
    const coachNameList = coachNamesInput.split(',');

    return coachNameList.length < this.MIN_COACH_COUNT || coachNameList.length > this.MAX_COACH_COUNT;
  },

  isInvalidCoachNameLength(coachNamesInput) {
    const coachNameList = coachNamesInput.split(',');

    return coachNameList.some(
      coachName => coachName.length < this.MIN_NAME_LENGTH || coachName.length > this.MAX_NAME_LENGTH,
    );
  },
};

module.exports = CoachNameValidator;
