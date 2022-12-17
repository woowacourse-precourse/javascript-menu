
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