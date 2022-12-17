const Validate = {
  inputCoachNameValidate(names) {
    const coaches = names.split(',');
    if (!coaches.every((name) => name.length >= 2 && name.length <= 4)) {
      throw new Error('[ERROR] 이름은 최소 2글자 최대 4글자 입니다\n');
    }
    if (coaches.length < 2 || coaches.length > 4) {
      throw new Error('[ERROR] 인원은 최소 2명 최대 5명입니다\n');
    }
  },
};

module.exports = Validate;
