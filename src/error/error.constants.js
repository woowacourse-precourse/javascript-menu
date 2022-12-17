const ERROR_MESSAGE = Object.freeze({
  DUPLICATED_COACH_NAME: "코치의 이름은 중복될 수 없습니다.",
  ERROR_PREFIX: "[ERROR]",
  INVALID_COUCH_NAME: "코치의 이름은 2 ~ 4글자입니다.",
  INVALID_COUCH_NUM: "코치는 최소 2명, 최대 5명까지 식사를 함께 해야합니다.",
  INVALID_CATEGORY_NUM:
    "한 주에 같은 카테고리는 최대 2회까지만 고를 수 있습니다.",
  INVALID_DUPLICATED_MENU:
    "각 코치에게 한 주에 중복되지 않는 메뉴를 추천해야 합니다.",
  INVALID_NOT_WANT_MENU_NUM:
    "먹지 못하는 메뉴는 최대 2개까지 입력할 수 있습니다.",
});

module.exports = ERROR_MESSAGE;
