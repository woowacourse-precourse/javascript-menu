const Validator = {
  name(names) {
    const namesArr = names.split(',');
    if (!(namesArr.length > 1 && namesArr.length < 6)) {
      throw Error('[ERROR] 코치는 최소 2명, 최대 5명을 입력해야 합니다.');
    }

    for (let inputOrder = 0; inputOrder < namesArr.length; inputOrder++) {
      let wrongInput = false;
      if (!(namesArr[inputOrder].length > 1 && namesArr[inputOrder].length < 5)) {
        wrongInput = true;
        throw Error('[ERROR] 코치의 이름은 최소 2글자, 최대 4글자를 입력해야 합니다.');
      }
      if (wrongInput) break;
    }
  },

  dislikeFood(foods) {
    let foodsArr;
    if (foods.includes(',')) {
      foodsArr = foods.split(',');
      if (!(foodsArr.length >= 0 && foodsArr.length <= 2)) {
        throw Error('[ERROR] 못 먹는 메뉴는 최소 0개, 최대 2개여야 합니다.');
      }
    }
  },
};

module.exports = Validator;
