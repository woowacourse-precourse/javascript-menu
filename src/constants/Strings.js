const QUERY = Object.freeze({
  COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
});

const ERROR_MSG = Object.freeze({
  COACHES_SIZE: '[ERROR] 코치는 2명에서 5명만 가능합니다.',
  COACH_NAME_LENGTH: '[ERROR] 코치의 이름은 2글자에서 4글자여야 합니다.',
});

module.exports = { QUERY, ERROR_MSG };
