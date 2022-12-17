//View
const INPUT_MESSAGE = {
    NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
    MENU: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
};

//Error Handling
const BASE_MESSAGE = '[ERROR] ';
const ERROR_MESSAGE = {
    NAME_LEN_LIMIT:  BASE_MESSAGE + '코치의 이름은 최소 2글자, 최대 4글자로 입력해 주세요.\n',
    NAME_NUM_LIMIT: BASE_MESSAGE + '코치는 최소 2명, 최대 5명까지 입력해 주세요.\n',
    MENU_NUM_LIMIT: BASE_MESSAGE + '못 먹는 메뉴는 최소 0개, 최대 2개로 입력해 주세요.\n',
    NOT_MENU: BASE_MESSAGE + '존재하지 않는 메뉴입니다.\n',
    DUPLICATE:  BASE_MESSAGE + '중복된 값이 존재합니다.\n',
}

module.exports = { INPUT_MESSAGE, ERROR_MESSAGE };