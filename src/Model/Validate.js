class Validate {
  static isNotKorean(input) {
    return !/[가-힣]/.test(input) && !/^$/.test(input);
  }

  static hasDuplication(input) {
    if (input.length !== new Set(input).size) {
      throw new Error('[ERROR] 중복이 존재합니다.');
    }
  }

  static validNameLength(names) {
    names.forEach(({ length }) => {
      if (length < 2 || length > 4) {
        throw new Error('[ERROR] 2~4 길이의 이름으로 입력하세요.');
      }
    });
  }

  static validCoachCount({ length }) {
    if (length < 2 || length > 5) {
      throw new Error('[ERROR] 2~5명 내로 입력하세요.');
    }
  }

  static menuCount(inputMenus) {
    if (inputMenus.length > 2) {
      throw new Error('[ERROR] 최대 2개 메뉴만 못 먹을 수 있습니다.');
    }
  }

  static isKorean(names) {
    names.forEach((name) => {
      if (this.isNotKorean(name)) {
        throw new Error('[ERROR] 올바른 한글을 입력하세요');
      }
    });
  }

  static names(inputNames) {
    const names = inputNames.split(',');

    this.hasDuplication(names);
    this.validNameLength(names);
    this.validCoachCount(names);
    this.isKorean(names);
  }

  static noMenu(inputMenus = '') {
    const menus = inputMenus.split(',');

    this.hasDuplication(menus);
    this.isKorean(menus);
  }
}

module.exports = Validate;
