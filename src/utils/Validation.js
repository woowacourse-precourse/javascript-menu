const Validation = {
  coachName(name) {
    if (name.length < 2 && name.length > 4) {
      throw new Error('[ERROR] 코치 닉네임은 2~4글자 사이로만 가능합니다.');
    }
  },
};

module.exports = Validation;
