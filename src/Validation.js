const Validation = {
  checkCoachNames(names) {
    if (!names.trim()) throw new Error('아무것도 입력되지 않았습니다.');
    names = names.split(',')
    if (names.some((name) => name.length < 2 || name.length > 4)) throw new Error('코치 이름은 최소 2글자, 최대 4글자여야 합니다.');
    if (names.length < 2 || names.length >5) throw new Error('코치는 최소 2명 최대 5명이어야 합니다.')
  }
}

module.exports = Validation;