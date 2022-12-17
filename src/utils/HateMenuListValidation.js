const HateMenuListValidation = {
  validation(hateMenuList) {
    if (!hateMenuList.length) return;
    hateMenu = hateMenuList.split(',');
    HateMenuListValidation.validateHateMenuListLength(hateMenu);
  },

  validateHateMenuListLength(hateMenuList) {
    if (hateMenuList.length > 2)
      throw new Error('[ERROR] 못 먹는 메뉴는 최대 2개까지 입니다.');
  },
};

module.exports = HateMenuListValidation;
