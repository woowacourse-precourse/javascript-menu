const MESSAGE = {
  START: '점심 메뉴 추천을 시작합니다.\n',
  ASK_COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  ASK_COACH_IMPOSSIBLE: (name) => `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
  RESULT_INFORM: '메뉴 추천 결과입니다.\n',
  RESULT_SECTION: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]\n',
  RESULT_CATEGORY: (categories) =>
    `[ 카테고리 | ${categories[0]} | ${categories[1]} | ${categories[2]} | ${categories[3]} | ${categories[4]} ]`,
  RESULT_MENU: (name, menus) => `[ ${name} | ${menus[0]} | ${menus[1]} | ${menus[2]} | ${menus[3]} | ${menus[4]} ]`,
  RESULT_COMPLETE: '\n추천을 완료했습니다.',
};

module.exports = { MESSAGE };
