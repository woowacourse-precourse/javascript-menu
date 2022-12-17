const DislikeFoodsValidation = {
  validation(dislikeFoods) {
    dislikeFoods = dislikeFoods.split(',');
    DislikeFoodsValidation.isCorrectLength(dislikeFoods);
  },

  isCorrectLength(dislikeFoods) {
    if (dislikeFoods.length > 2)
      throw new Error('[ERROR] 먹지 못하는 메뉴는 3개 이하이어야 합니다.');
  },
};

module.exports = DislikeFoodsValidation;
