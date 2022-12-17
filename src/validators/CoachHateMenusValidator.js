const { MENU_INFO } = require('../constants');

const CoachHateMenusValidator = {
  MAX_MENU_LENGTH: 2,

  /**
   * 코치가 못 먹는 메뉴에 대한 유효성을 검사한다.
   * @param {string} hateMenusInput 못 먹는 메뉴 목록 입력값
   * @throws 유효하지 않은 메뉴 개수인 경우 error
   * @throws 메뉴 목록에 존재하지 않는 메뉴인 경우 error
   * @throws 중복된 메뉴가 존재하는 경우 error
   */
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

  /**
   * 메뉴 개수를 검사하는 메서드
   * @param {string[]} hateMenus
   * @returns {boolean} 유효하지 않은 메뉴 개수인 경우 true를 반환한다.
   */
  isInvalidMenuLength(hateMenus) {
    return hateMenus.length > this.MAX_MENU_LENGTH;
  },

  /**
   * 메뉴 목록에 존재하는 메뉴인지 검사하는 메서드
   * @param {string[]} hateMenus
   * @returns {boolean} 메뉴 목록에 존재하지 않는 경우 true를 반환한다.
   */
  isInvalidHateMenu(hateMenus) {
    if (this.isNoHateMenus(hateMenus)) return false;

    const allMenus = Object.values(MENU_INFO)
      .map(value => value.split(', '))
      .flat(1);

    return hateMenus.some(hateMenu => !allMenus.includes(hateMenu));
  },

  /**
   * 못 먹는 메뉴가 존재하는지 검사하는 메서드
   * @param {string[]} hateMenus
   * @returns {boolean} 못 먹는 메뉴가 없는 경우 true를 반환한다.
   */
  isNoHateMenus(hateMenus) {
    return hateMenus.length === 1 && hateMenus[0] === '';
  },

  /**
   * 중복된 메뉴가 존재하는지 검사하는 메서드
   * @param {string[]} hateMenus
   * @returns {boolean} 중복된 메뉴가 존재하는 경우 true를 반환한다.
   */
  hasDuplicateMenu(hateMenus) {
    return hateMenus.length !== new Set([...hateMenus]).size;
  },
};

module.exports = CoachHateMenusValidator;
