const Validator = {
  MAX_COACH_NUMBER: 5,
  MIN_COACH_NUMBER: 2,

  MAX_COACH_NAME_LENGTH: 4,
  MIN_COACH_NAME_LENGTH: 2,

  MAX_MENU_NUMBER: 2,

  validateCoachsLength(names) {
    if (names.length < this.MIN_COACH_NUMBER || names.length > this.MAX_COACH_NUMBER) {
      throw new Error("[ERROR] 코치는 최소 2명 이상, 최대 5명 이하로 입력해야 합니다.");
    }
  },

  validateCoachNamesLength(names) {
    names.forEach((name) => {
      if (name.length < this.MIN_COACH_NAME_LENGTH || name.length > this.MAX_COACH_NAME_LENGTH) {
        throw new Error("[ERROR] 코치의 이름은 최소 2글자 이상, 최대 4글자 이하로 입력해야 합니다.");
      }
    });
  },

  validateCoachNameDuplicate(names) {
    if (names.length !== new Set(names).size) {
      throw new Error("[ERROR] 코치의 이름은 중복되지 않아야 합니다.");
    }
  },

  validateCoachNames(nameString) {
    const names = nameString.split(",");
    this.validateCoachsLength(names);
    this.validateCoachNamesLength(names);
    this.validateCoachNameDuplicate(names);
  },

  validateMenusLength(menus) {
    if (menus.length > this.MAX_MENU_NUMBER) {
      throw new Error("[ERROR] 못 먹는 음식은 최대 두개 이하로 입력해야 합니다.");
    }
  },

  validateMenuNameDuplicate(menus) {
    if (menus.length !== new Set(menus).size) {
      throw new Error("[ERROR] 메뉴의 이름은 중복되지 않아야 합니다.");
    }
  },

  validateBannedMenu(menuString) {
    const menus = menuString.split(",");
    this.validateMenusLength(menus);
    this.validateMenuNameDuplicate(menus);
  },
};

module.exports = Validator;
