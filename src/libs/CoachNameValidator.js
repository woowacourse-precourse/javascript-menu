const CoachNameValidator = {
  validation(coachNames) {
    coachNames = coachNames.split(',');
    CoachNameValidator.isCorrectLength(coachNames);
  },

  isCorrectLength(coachNames) {
    coachNames.forEach((coachName) => {
      if (coachName.length < 2)
        throw new Error('[ERROR] 코치의 이름은 2글자 이상이어야 합니다.');

      if (coachName.length > 4)
        throw new Error('[ERROR] 코치의 이름은 5글자 이하이어야 합니다.');
    });
  },
};

module.exports = CoachNameValidator;
