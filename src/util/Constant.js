const INPUT_MESSAGE = Object.freeze({
  COTCH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  NOT_EAT: '이(가) 못 먹는 메뉴를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  START_TITLE: '점심 메뉴 추천을 시작합니다.\n',
  RESULT_TITLE: '\n메뉴 추천 결과입니다.',
  RESULT_DAY: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일]',
  END_TITLE: '추천을 완료했습니다.',
});

const ERROR_MESSAGE = Object.freeze({});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
