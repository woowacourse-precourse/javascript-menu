const NAME_LENGTH = Object.freeze({
  MIN: 2,
  MAX: 4,
});
const TEAM_LENGTH = Object.freeze({
  MIN: 2,
  MAX: 5,
});

const INPUT_MSG = Object.freeze({
  NAME: '코치의 이름을 입력해 주세요. (, 로 구분)',
  NO_EAT_FOOD(name) {
    return `${name}(이)가 못 먹는 메뉴를 입력해 주세요.`;
  },
});

const OUTPUT_MSG = Object.freeze({
  START: '점심 메뉴 추천을 시작합니다.\n',
  RESULT: '\n메뉴 추천 결과입니다.',
  FINISH: '\n추천을 완료했습니다.',
});

const ERROR = '[ERROR]';
const ERROR_MSG = Object.freeze({
  NAME_LENGTH: `${ERROR} 코치의 이름은 최소 ${NAME_LENGTH.MIN}글자, 최대 ${NAME_LENGTH.MAX}입니다.`,
  TEAM_LENGTH: `${ERROR} 코치는 최소 2명 이상 입력해야합니다.`,
  NO_EAT_FOOD_LENGTH: `${ERROR} 먹지 못하는 음식은 최소 0개, 최대 2개입니다.`,
});
module.exports = { OUTPUT_MSG, ERROR_MSG, INPUT_MSG, NAME_LENGTH, TEAM_LENGTH };
