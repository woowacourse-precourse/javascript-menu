const Validation = {
  checkCoachNames(names) {
    names = names.trim();
    if (!names) throw new Error('아무것도 입력되지 않았습니다.');
  }
}

module.exports = Validation;