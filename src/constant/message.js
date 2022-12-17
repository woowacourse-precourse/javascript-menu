const message = {
  START: `점심 메뉴 추천을 시작합니다.\n`,
  NAME: `코치의 이름을 입력해 주세요. (, 로 구분)\n`,
  hates(name) {
    return `${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
  },
  RESULT: `메뉴 추천 결과입니다.\n`,
  COMPLETE: `추천을 완료했습니다.\n`,
};

module.exports = message;
