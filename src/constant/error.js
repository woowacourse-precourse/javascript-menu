const error = {
  TRIPLE_CATEGORY_ERROR: `[ERROR] 같은 카테고리가 3번 넘게 나왔습니다.`,
  COACH_RANGE_ERROR: `[ERROR] 코치의 수가 너무 적가나 많습니다.`,
  NAME_RANGE_ERROR: `[ERROR] 코치 이름의 글자 수를 확인해 주세요.`,
  HATE_RANGE_ERROR: `[ERROR] 먹지 못하는 음식은 2개까지 말할 수 있습니다.`,
  HATE_REPEATED_ERROR: `[ERROR] 먹지 못하는 음식은 반복해서 나올 수 없습니다.`,
  HATE_NOT_INCLUDED_ERROR: `[ERROR] 메뉴에 없는 음식을 말할 수 없습니다.`,
};

module.exports = error;
