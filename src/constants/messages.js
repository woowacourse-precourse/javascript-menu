const OUTPUT_MESSAGES = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.\n',
});

const INPUT_MESSAGES = Object.freeze({
  name: '코치의 이름을 입력해 주세요. (, 로 구분)\n',

  printUnableEatMenu(name) {
    return `${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
  },
});

module.exports = {
  OUTPUT_MESSAGES,
  INPUT_MESSAGES,
};
