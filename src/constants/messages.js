const OUTPUT_MESSAGES = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.\n',
  result: '\n메뉴 추천 결과입니다.\n',
  weeks: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]\n',
  printCategory([mon, tue, wen, thu, fri]) {
    return `\n[ 카테고리 | ${mon} | ${tue} | ${wen} | ${thu} | ${fri} ]`;
  },
  printCoachMenu(coachName, [mon, tue, wen, thu, fri]) {
    return `[ ${coachName} | ${mon} | ${tue} | ${wen} | ${thu} | ${fri} ]`;
  },
  done: '\n추천을 완료했습니다.',
});

const INPUT_MESSAGES = Object.freeze({
  name: '코치의 이름을 입력해 주세요. (, 로 구분)\n',

  printUnableEatMenu(name) {
    return `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
  },
});

const ERROR_MESSAGES = Object.freeze({
  invalidMemberCount: '[ERROR] 코치는 최소 2명 이상, 최대 5명까지만 입력해야 합니다.\n',
  invalidNameLength: '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자 입력할 수 있습니다.\n',
  invalidUnableToEatMenuLength: '[ERROR] 못 먹는 메뉴는 최대 2개까지만 입력할 수 있습니다.\n',
  invalidSeparator: '[ERROR] 구분자는 콤마(,)만 사용할 수 있습니다\n',
});

module.exports = {
  OUTPUT_MESSAGES,
  INPUT_MESSAGES,
  ERROR_MESSAGES,
};
