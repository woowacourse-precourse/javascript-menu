const Validation = {
  coachName(name) {
    if (name.length < 2 && name.length > 4) {
      throw new Error('[ERROR] 코치 닉네임은 2~4글자 사이로만 가능합니다.');
    }
  },

  coachNumber(coach) {
    if (coach.length < 2 && coach.length > 5) {
      throw new Error('[ERROR] 코치는 2~5명과 같이 식사할 수 있습니다.');
    }
  },
};

module.exports = Validation;
