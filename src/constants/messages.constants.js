const MESSAGE = Object.freeze({
  SERVICE: { START: '점심 메뉴 추천을 시작합니다.\n',
    RESULT: { PREFIX: '메뉴 추천 결과입니다.\n',
      SUFFIX: '추천을 완료했습니다.',
      COLUMN: {
        START: '[',
        DELIMITER: '|',
        END: ']',
      } } },
  INPUT: {
    DELIMITER: ',',
    COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
    CAN_NOT_EAT_FOOD_LIST: '(이)가 못먹는 메뉴를 입력해주세요.\n',
  },
});

module.exports = MESSAGE;
