const Validation = {
  isValidInput(names) {
    const nameSize = this.isValidName(names);
    const numbersOfPeople = this.isValidNumbersOfPeople(names);

    if (nameSize || numbersOfPeople) {
      return true;
    }
    return false;
  },

  isValidName(names) {
    return names.split(',').forEach((item) => {
      if (item.length < 2 || item.length > 4) {
        throw new Error('[ERROR] 이름은 최소2글자 ~ 최대 4글자 입니다.');
      }
    });
  },

  isValidNumbersOfPeople(names) {
    const numbersOfPeople = names.split(',');
    if (numbersOfPeople.length < 2 || numbersOfPeople.length > 5) {
      throw new Error('[ERROR] 인원은 최소 2명 최대 5명입니다.');
    }
  },
};

module.exports = Validation;
