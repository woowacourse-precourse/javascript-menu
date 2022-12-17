const CoachNameValidator = {
  validation(coachNames) {
    coachNames = coachNames.split(',');
    CoachNameValidator.isCorrectLength(coachNames);
    CoachNameValidator.isCorrectCoachsNumber(coachNames.length);
  },

  isCorrectLength(coachNames) {
    coachNames.forEach((coachName) => {
      if (coachName.length < 2)
        throw new Error('[ERROR] 코치의 이름은 2글자 이상이어야 합니다.');
      if (coachName.length > 4)
        throw new Error('[ERROR] 코치의 이름은 5글자 이하이어야 합니다.');
    });
  },

  isCorrectCoachsNumber(coachsNumber) {
    if (coachsNumber < 2)
      throw new Error('[ERROR] 코치는 최소 2명 이상 입력해야 합니다.');
    if (coachsNumber > 5)
      throw new Error('[ERROR] 코치는 최대 5명 이하 입력해야 합니다.');
  },
};

module.exports = CoachNameValidator;
