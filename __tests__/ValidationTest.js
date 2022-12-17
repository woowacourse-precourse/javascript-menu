const { Console } = require('@woowacourse/mission-utils');
const { Validation } = require('../src/controller/Validation');

afterEach(() => {
  Console.close();
});

describe('Validation 객체의 ofCoachName 메서드 테스트', () => {
  test.each([
    ['안녕', '안'],
    ['김또깡또깡', '김또깡'],
  ])('각 코치의 이름 글자수가 2~4글자가 아닐때 에러 확인', (input) => {
    expect(() => Validation.ofCoachName(input)).toThrow();
  });
  test.each([['안녕']])('입력된 코치의 명수가 2명 미만일때 에러 확인', (input) => {
    expect(() => Validation.ofCoachName(input)).toThrow();
  });
});
