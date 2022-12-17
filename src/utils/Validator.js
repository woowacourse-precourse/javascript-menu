class Validator {
  static checkCoachNames(coachNames) {
    if (!this.#isValidInputFormat(coachNames)) {
      throw new Error(
        '[ERROR] 코치 이름은 한글을 ,(쉼표)로 구분하여 입력해주세요.'
      );
    }

    if (this.#isLessThanMinimumCoachNumber(coachNames)) {
      throw new Error('[ERROR] 코치는 최소 2명 이상 입력해야 합니다.');
    }

    if (this.#isMoreThanMaximumCoachNumber(coachNames)) {
      throw new Error('[ERROR] 코치는 최대 5명 까지만 입력해야 합니다.');
    }
  }

  static checkNameLength(name) {
    if (name.length < 2 || name.length > 4) {
      throw new Error(
        '[ERROR] 코치이름은 최소 2글자, 최대 4글자 까지 입력가능합니다.'
      );
    }
  }

  static checkDislikeMenu(dislikeMenu) {
    if (!this.#isValidInputFormat(dislikeMenu)) {
      throw new Error('[ERROR] 메뉴를 ,(쉼표)로 구분하여 입력해주세요.');
    }
    if (this.#isMoreThanMaximumDislikeMenuNumber(dislikeMenu)) {
      throw new Error('[ERROR] 메뉴는 최대 2개까지만 입력가능합니다.');
    }
  }

  static #isValidInputFormat(Input) {
    const check = /^[가-힣]+(,[가-힣]+)*$/;
    return check.test(Input);
  }

  static #isLessThanMinimumCoachNumber(coachNames) {
    return coachNames.split(',').length < 2;
  }

  static #isMoreThanMaximumCoachNumber(coachNames) {
    return coachNames.split(',').length > 5;
  }

  static #isMoreThanMaximumDislikeMenuNumber(dislikeMenu) {
    return dislikeMenu.split(',').length > 2;
  }
}

module.exports = Validator;
