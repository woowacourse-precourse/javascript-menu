const { MENU_INFO } = require('../constants');

const CoachHateMenusValidator = {
  MAX_MENU_LENGTH: 2,

  validate(hateMenusInput) {
    const hateMenus = hateMenusInput.split(',');
    if (this.isInvalidMenuLength(hateMenus)) {
      throw new Error(`[ERROR] 못 먹는 메뉴는 최대 ${this.MAX_MENU_LENGTH}개까지 입력 가능합니다.`);
    }

    if (this.isInvalidHateMenu(hateMenus)) {
      throw new Error('[ERROR] 유효하지 않은 메뉴입니다.');
    }

    if (this.hasDuplicateMenu(hateMenus)) {
      throw new Error('[ERROR] 중복된 메뉴가 존재합니다.');
    }
  },

  isInvalidMenuLength(hateMenus) {
    return hateMenus.length > this.MAX_MENU_LENGTH;
  },

  isInvalidHateMenu(hateMenus) {
    if (this.isNoHateMenus(hateMenus)) return false;

    const allMenus = Object.values(MENU_INFO)
      .map(value => value.split(', '))
      .flat(1);

    return hateMenus.some(hateMenu => !allMenus.includes(hateMenu));
  },

  isNoHateMenus(hateMenus) {
    return hateMenus.length === 1 && hateMenus[0] === '';
  },

  hasDuplicateMenu(hateMenus) {
    return hateMenus.length !== new Set([...hateMenus]).size;
  },
};

module.exports = CoachHateMenusValidator;
