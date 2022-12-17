const START_MESSAGE = {
    START: '점심 메뉴 추천을 시작합니다.',
}

const INPUT_MESSAGE = {
    INPUT_MEMBER: '코치의 이름을 입력해 주세요. (, 로 구분)',
    INPUT_NOT_EAT: '(이)가 못 먹는 메뉴를 입력해 주세요.',
    CATEGORIE: "카테고리",
}

const OUTPUT_MESSAGE = {
    MENU_RESULT: '메뉴 추천 결과입니다.',
    MENU_FINISH: '추천을 완료했습니다.',
    DAY_LIST: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
    SUB: '은(는)',
}

const ERROR_MESSAGE = {
    COACH_RANGE: '[ERROR] 코치는 최소 2명 이상 5명이하 입력해야 합니다.',
    NAME_RANGE: '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자로 입력해야 합니다.',
    MENU_NAME_FAULT: '[ERROR] 입력하신 메뉴는 없습니다. 정확하게 입력해주세요 (띄어쓰지말고 ,뒤에 바로 써주세요)',
    HATE_FOOD_LENGTH: '[ERROR] 못 먹는 음식은 최대2개까지 입력 가능합니다.',
}

module.exports = {START_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE};