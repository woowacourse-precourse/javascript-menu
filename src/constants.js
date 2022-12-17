const PRINT_STRING = {
  OUTPUT_GAME_START: '점심 메뉴 추천을 시작합니다.\n',
  INPUT_COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
};

const PRINT_ERROR_STRING = {
  COACH_NAME_LENGTH:
    ' [ERROR] 코치는 최소 2명 이상, 5명 이하까지 입력해야 합니다.',
  COACH_NAME_DUPLE: ' [ERROR] 코치 이름이 중복 되었습니다.',
};
module.exports = { PRINT_STRING, PRINT_ERROR_STRING };
