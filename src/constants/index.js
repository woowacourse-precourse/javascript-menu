const MENU = Object.freeze({
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
});

const MESSAGE = Object.freeze({
  START_RECOMMENDATION: "점심 메뉴 추천을 시작합니다.",
  COACH_NAME: "코치의 이름을 입력해 주세요. (, 로 구분)",
  COACH_DISLIKE: "(이)가 못 먹는 메뉴를 입력해 주세요.",
});

const PREFIX = "[ERROR]";

const ERROR = Object.freeze({
  NAME_COUNT: `${PREFIX} 코치는 중복 없이 최소 2명, 최대 5명을 입력해야 합니다.`,
  NAME_LENGTH: `${PREFIX} 코치의 이름은 최소 2글자, 최대 4글자를 입력해야 합니다.`,
  DISLIKE_COUNT: `${PREFIX} 코치가 못 먹는 메뉴는 중복 없이 최소 0개, 최대 2개를 입력해야 합니다.`,
  DISLIKE_MENU: `${PREFIX} 코치가 못 먹는 메뉴는 점심 메뉴에 존재해야 합니다.`,
});

module.exports = { MENU, MESSAGE, ERROR };
