const ListValidator = {
  isDuplicate(list) {
    const set = new Set(list);
    return list.length !== set.size;
  },

  validate(list) {
    if (ListValidator.isDuplicate(list)) {
      throw new Error('[ERROR] 중복된 값을 입력하였습니다.');
    }
  },
};

module.exports = ListValidator;
