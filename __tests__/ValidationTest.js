const { Console } = require('@woowacourse/mission-utils');
const { Validation } = require('../src/controller/Validation');

afterEach(() => {
  Console.close();
});

describe('Validation 객체의 ofCoachName 메서드 테스트', () => {
  test.each([
    ['안녕', '안'],
    ['김또깡또깡', '김또깡'],
  ])('각 코치의 이름 글자수가 2~4글자가 아닐때 에러 확인', input => {
    expect(() => Validation.ofCoachName(input)).toThrow();
  });
  test.each([['안녕'], ['안녕', '안녕', '안녕', '안녕', '안녕', '안녕']])(
    '입력된 코치의 명수가 2명 미만 5명 초과일때 에러 확인',
    input => {
      expect(() => Validation.ofCoachName(input)).toThrow();
    },
  );
});

describe('Validation 객체의 ofMenu 메서드 테스트', () => {
  test.each([['와플'], ['포카칩'], ['김치부침개']])('싫어하는 음식을 입력한 값이 메뉴에 없을때 에러 확인', input => {
    expect(() => Validation.ofMenu(input)).toThrow();
  });
  test.failing.each([['김치찌개'], ['팟타이']])('싫어하는 음식을 입력한 값이 메뉴에 있을때 에러 없는지 확인', input => {
    expect(() => Validation.ofMenu(input)).toThrow();
  });
});
