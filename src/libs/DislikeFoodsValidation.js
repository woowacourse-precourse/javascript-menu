const DislikeFoodsValidation = {
  validation(dislikeFoods, isExistInMenus) {
    dislikeFoods = dislikeFoods.split(',');
    DislikeFoodsValidation.isCorrectLength(dislikeFoods);
    DislikeFoodsValidation.isExistMenu(isExistInMenus);
  },

  isCorrectLength(dislikeFoods) {
    if (dislikeFoods.length > 2)
      throw new Error('[ERROR] 먹지 못하는 메뉴는 3개 이하이어야 합니다.');
  },

  isExistMenu(isExistInMenus) {
    if (!isExistInMenus)
      throw new Error('[ERROR] 기존 메뉴에 존재하지 않는 메뉴가 있습니다.');
  },
};

module.exports = DislikeFoodsValidation;
