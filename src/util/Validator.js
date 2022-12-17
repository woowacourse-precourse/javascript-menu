const Validator = {
  validateCoachsLength(names) {
    if (names.length < 2 || names.length > 5) {
      throw new Error("[ERROR] 코치는 최소 2명 이상, 최대 5명 이하로 입력해야 합니다.");
    }
  },

  validateCoachNamesLength(names) {
    names.forEach((name) => {
      if (name.length < 2 || name.length > 4) {
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
    if (menus > 2) {
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
