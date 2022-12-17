const MESSAGE = {
    GAME_START : "점심 메뉴 추천을 시작합니다.\n",
    INPUT_NAMES : `코치의 이름을 입력해 주세요. (, 로 구분)\n`,
};

const ERROR = {
    NAME_SIZE_ERROR : `[ERROR] 이름은 2~4글자여야 합니다.\n`,
    MAN_NUMBER_ERROR: `[ERROR] 인원은 2~5명이여야 합니다.\n`,
    MENU_NUMBER_ERROR : `[ERROR] 못먹는 메뉴는 0~2개여야 합니다.\n`,
}

module.exports = {MESSAGE, ERROR};