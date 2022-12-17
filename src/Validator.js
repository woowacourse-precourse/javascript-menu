const Validator = {
  name(names) {
    const namesArr = names.split(',');
    if (!(namesArr.length > 0 || namesArr.length < 4)) {
      throw Error('[ERROR] 코치는 최소 2명, 최대 5명을 입력해야 합니다.');
    }
  },
};

module.exports = Validator;
