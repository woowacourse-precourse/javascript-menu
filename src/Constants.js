const START_MESSAGE = '점심 메뉴 추천을 시작합니다. \n';
const INPUT_COACH_NAME = '코치의 이름을 입력해 주세요. (, 로 구분) \n';
const NOT_EAT_MENU = coachName =>
  `${coachName}가 못 먹는 메뉴를 입력해 주세요.`;
const RESULT_MESSAGE = '메뉴 추천 결과입니다.';
const COMPLETE_MESSAGE = '추천을 완료했습니다.';

const TWO = 2;
const FOUR = 4;
const FIVE = 5;

const ERROR_COACH_NUMBER =
  '[ERROR] 코치는 최소 2명 이상 5명 이하로 입력해야 합니다.';

module.exports = {
  START_MESSAGE,
  INPUT_COACH_NAME,
  NOT_EAT_MENU,
  RESULT_MESSAGE,
  COMPLETE_MESSAGE,
  TWO,
  FOUR,
  FIVE,
  ERROR_COACH_NUMBER,
};
