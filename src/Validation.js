class Validation {
  static validateCoachNames(coachNames) {
    const coachNameArr = coachNames.split(',');

    if (!Validation.#isValidCoachNameLength(coachNameArr)) {
      throw new Error('[ERROR] 코치 이름의 길이는 2~4글자 입니다.');
    }

    if (!Validation.#isValidCoachCount(coachNameArr)) {
      throw new Error('[ERROR] 코치는 2명에서 5명까지 입력 가능합니다.');
    }
  }

  static #isValidCoachNameLength(coachNameArr) {
    return coachNameArr.every((coachName) => 2 <= coachName.length && coachName.length <= 4);
  }

  static #isValidCoachCount(coachNameArr) {
    return 2 <= coachNameArr.length && coachNameArr.length <= 5;
  }

  static validateAntiFood(antiFood) {
    const antiFoodArr = antiFood.split(',');
    if (!Validation.#isValidAntiFoodCount(antiFoodArr)) {
      throw new Error('[ERROR] 못 먹는 음식은 0개 ~ 2개 만 입력 가능합니다.');
    }
  }

  static #isValidAntiFoodCount(antiFoodArr) {
    return 0 <= antiFoodArr.length && antiFoodArr.length <= 2;
  }
}

module.exports = Validation;
