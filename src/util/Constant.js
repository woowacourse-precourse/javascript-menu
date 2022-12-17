const INPUT_MESSAGE = Object.freeze({
  COTCH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  NOT_EAT: '이(가) 못 먹는 메뉴를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  START_TITLE: '점심 메뉴 추천을 시작합니다.\n',
  RESULT_TITLE: '메뉴 추천 결과입니다.',
  END_TITLE: '추천을 완료했습니다.',
});

const ERROR_MESSAGE = Object.freeze({
  IS_EMPTY: '[ERROR] 값을 입력해야 합니다.',

  BRIDGE_SIZE_NOT_NUMBER: '[ERROR] 숫자만 입력해야 합니다.',
  BRIDGE_SIZE_NOT_RIGHT_RANGE: '[ERROR] 3이상 20이하 숫자를 입력해야 합니다.',

  MOVE_NOT_RIGHT_LETTER: '[ERROR] U or D 를 입력해야 합니다.',

  COMMAND_NOT_RIGHT_LETTER: '[ERROR] Q or R 를 입력해야 합니다.',
});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
