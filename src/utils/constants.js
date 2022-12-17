const MESSAGE = Object.freeze({
  serviceStart: '점심 메뉴 추천을 시작합니다.\n',
  inputCoaches: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  inputHateMenu: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
});

const INPUT_HATE_MENU = (coachName) =>
  `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;

const ERROR = Object.freeze({
  mustNotBeBlank: '[ERROR] 공백입니다. 값을 입력해주세요.',
  mustBeStringType: '[ERROR] 숫자가 아닌 문자로 입력해주세요.',
  mustBeValidLengthOfCoaches:
    '[ERROR] 코치는 최소 2명 이상, 5명 이하로 입력해주세요.',
  mustBeInSAMPLE: '[ERROR] 기존에 없는 메뉴입니다.',
  mustBeValidLengthOfMenus:
    '[ERROR] 못 먹는 메뉴를 3개 이상 입력할 수 없습니다.',
});

const CATEGORY_LENGTH = Object.freeze(5);

const ZERO = Object.freeze(0);

const MAX_LENGTH_OF_DUPLICATED_CATEGORY = Object.freeze(2);

module.exports = {
  MESSAGE,
  INPUT_HATE_MENU,
  ERROR,
  CATEGORY_LENGTH,
  ZERO,
  MAX_LENGTH_OF_DUPLICATED_CATEGORY,
};
