const CoachHateMenusValidator = require('../src/validators/CoachHateMenusValidator');

describe('코치가 못 먹는 메뉴에 대한 입력값의 유효성을 검사하는 객체 테스트', () => {
  test.each([['가나다라마'], ['우동,스시,참깨라면'], ['우동,스시,규동'], ['우동,우동']])(
    '유효하지 않은 못 먹는 메뉴 입력값인 경우 예외 처리',
    input => {
      expect(() => CoachHateMenusValidator.validate(input)).toThrow('[ERROR]');
    },
  );

  test.each([[''], ['우동'], ['우동,스시']])('유효한 못 먹는 메뉴 입력값인 경우 정상 동작', input => {
    expect(() => CoachHateMenusValidator.validate(input)).not.toThrow('[ERROR]');
  });
});
