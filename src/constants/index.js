const { deepFreeze } = require('../utils/deepFreeze');

const MENUS = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const GAME_MESSAGE = deepFreeze({
  start: '점심 메뉴 추천을 시작합니다.\n',
  input_coach_name: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  input_menu_coach_cant_eat: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
  result: {
    division: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
    category: '[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]',
  },
  end: '\n추천을 완료했습니다.',
});

const ERROR_MESSAGE = deepFreeze({
  abstract_class: '추상 클래스로 인스턴스를 생성하였습니다.',
  interface_class: '메서드 구현이 필요합니다',
});

const VALIDATION_MESSAGE = deepFreeze({
  bridge_length: {
    number: '다리 길이는 숫자를 입력해주셔야 합니다.',
    range: '다리 길이는 3-20 사이의 숫자를 입력해주어야 합니다.',
  },
  move_space: {
    command: '플레이어가 이동할 칸은 대문자 U 또는 D중 하나만 입력할 수 있습니다.',
  },
  replay: {
    command: '게임 재시작 또는 종료를 하기 위해서는 각각 대문자 R, Q를 입력해주셔야 합니다.',
  },
});

const SPACE = deepFreeze({
  0: 'D',
  1: 'U',
});

module.exports = {
  MENUS,
  GAME_MESSAGE,
  ERROR_MESSAGE,
  VALIDATION_MESSAGE,
  REGEX,
  SPACE,
};
