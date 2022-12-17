const { Console } = require('@woowacourse/mission-utils');

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
    try {
      return names.split(',').forEach((item) => {
        if (item.length < 2 || item.length > 4) {
          throw new Error(
            '[ERROR] 이름은 최소2글자 ~ 최대 4글자 입니다. 다시입력해주세요.'
          );
        }
      });
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  isValidNumbersOfPeople(names) {
    const numbersOfPeople = names.split(',');

    try {
      if (numbersOfPeople.length < 2 || numbersOfPeople.length > 5) {
        throw new Error(
          '[ERROR] 코치의 인원은 최소 2명 최대 5명입니다. 다시 입력해주세요.'
        );
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  isValidRangeOfFoodLength(length) {
    let food = length.split(',');
    try {
      if (food.length < 0 || food.length > 2) {
        throw new Error(
          '[ERROR] 못먹는 음식은 0개 ~ 2개 입니다. 다시 입력해주세요.'
        );
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },
};

module.exports = Validation;
