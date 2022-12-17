const CATEGORY = {
    일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
    한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
    중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
    아시안:
        '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
    양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const NAME = {
    MIN: 2,
    MAX: 4
}

const COACH = {
    MIN: 2,
    MAX: 5,
    NOTEAT_MAX: 2,
}

const MESSAGE = {
    START: "점심 메뉴 추천을 시작합니다.\n",
    END_FIRST: "메뉴 추천 결과입니다.\n[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]",
    END_SECOND: "\n추천을 완료했습니다.",
    INPUT_COACH_NAME: "코치의 이름을 입력해 주세요. (, 로 구분)\n",
    INPUT_NOTEAT: "(이)가 못 먹는 메뉴를 입력해 주세요.\n",
    ERROR_COACH_COUNT: "[ERROR] 코치는 최소 2명 이상 최대 5명 이하입니다.",
    ERROR_COACH_NAME: "[ERROR] 코치이름은 최소 2자 이상 최대 4자 이하입니다.",
    ERROR_NOTEAT: "[ERROR] 못먹는 음식은 최소 0개 이상 최대 2개 이하입니다.",
}
module.exports = { NAME, COACH, MESSAGE };