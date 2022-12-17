const CoachNameValidator = require('../src/validators/CoachNameValidator');

describe('코치 이름에 대한 입력값의 유효성을 검사하는 객체 테스트', () => {
  test.each([
    [''],
    ['제임스제임'],
    ['준'],
    ['토미'],
    ['토미,'],
    ['토미,제임스제임'],
    ['토미,토미'],
    ['토미,제임스,포코,포비,제이슨,공원'],
  ])('유효하지 않은 코치 이름 입력값인 경우 예외 처리', input => {
    expect(() => CoachNameValidator.validate(input)).toThrow('[ERROR]');
  });

  test.each([['토미,제임스딘'], ['토미,제임스,포코'], ['토미,제임스,포코,포비,공원']])(
    '유효한 코치 이름 입력값인 경우 정상 동작',
    input => {
      expect(() => CoachNameValidator.validate(input)).not.toThrow('[ERROR]');
    },
  );
});
