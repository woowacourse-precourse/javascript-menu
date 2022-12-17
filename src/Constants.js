const SERVICE_MESSAGE = {
  START: '점심 메뉴 추천을 시작합니다.',
  RESULT: '\n메뉴 추천 결과입니다.',
  DAYS: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  CATEGORY: category => `[ 카테고리 | ${category.join(' | ')} ]`,
  MENU: (name, menus) => `[ ${name} | ${menus.join(' | ')} ]`,
  FINISH: '추천을 완료했습니다.',
};

const INPUT_MESSAGE = {
  COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  FOOD_NAME: name => `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
};

const ERROR_MESSAGE = {
  COACH_NUMBER: '같이 식사할 수 있는 인원수는 최소 2명 최대 5명입니다.',
  NAME_LENGTH: '코치 이름은 최소 2글자, 최대 4글자여야 합니다.',
  FODDS_LENGTH: '못 먹는 음식은 2개 이하여야 합니다.',
};

const CONDITION = {
  COACH_NUMBER: names => names.length < 2 || names.length > 5,
  NAME_LENGTH: names => names.some(name => name.length < 2 || name.length > 4),
  FODDS_LENGTH: foods => foods.length > 2,
};
module.exports = { CONDITION, ERROR_MESSAGE, INPUT_MESSAGE, SERVICE_MESSAGE };
