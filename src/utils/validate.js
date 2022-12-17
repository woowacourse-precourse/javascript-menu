const Validate = {
  inputCoachNameValidate(names) {
    const coaches = names.split(',');
    if (!coaches.every((name) => name.length >= 2 && name.length <= 4)) {
      throw new Error('[ERROR] 이름은 최소 2글자 최대 4글자 입니다\n');
    }
    if (coaches.length < 2 || coaches.length > 4) {
      throw new Error('[ERROR] 인원은 최소 2명 최대 5명입니다\n');
    }
  },
  exceptionFoodsValidate(foods) {
    // eslint-disable-next-line no-useless-escape
    const iskorean = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    const splitFoods = foods.split(',');
    if (!splitFoods || splitFoods === '') return;
    splitFoods.forEach((food) => {
      if (iskorean.test(food)) {
        throw new Error('[ERROR] 한글 입력만 가능합니다.');
      }
    });
  },
};

module.exports = Validate;
