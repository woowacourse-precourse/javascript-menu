const CoachNameListValidation = {
  validation(coachNameList) {
    coachNameList = coachNameList.split(',');
    CoachNameListValidation.validateNameLength(coachNameList);
    CoachNameListValidation.validateNameListLength(coachNameList);
  },

  validateNameLength(coachNameList) {
    coachNameList.forEach((coachName) => {
      if (coachName.length < 2 || coachName.length > 4)
        throw new Error('[ERROR] 코치 이름은 최소 2글자, 최대 4글자 입니다.');
    });
  },

  validateNameListLength(coachNameList) {
    if (coachNameList.length < 2 || coachNameList.length > 5)
      throw new Error('[ERROR] 식사할 코치는 최소 2명, 최대 5명 입니다. ');
  },
};

module.exports = CoachNameListValidation;
