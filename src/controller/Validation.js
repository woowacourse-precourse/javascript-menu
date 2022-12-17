const Validation = {
  ofCoachName(userInput) {
    if (!userInput.split(',').every((name) => name.length >= 2 && name.length <= 4))
      throw new Error('[ERROR] 코치의 이름은 2글자 이상 4글자 이하로만 입력해주세요');
  },
};

module.exports = { Validation };
