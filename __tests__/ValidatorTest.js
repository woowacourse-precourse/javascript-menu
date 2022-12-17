const Validator = require('../src/Validator');

describe('코치 이름 검사', () => {
  test.each([
    '토미,제임스',
    '토미,제임스,포코,우동,스시',
  ])('정상', (input) => {
    expect(() => Validator.validateCoachNames(input.split(','))).not.toThrow();
  });

  test.each([
    '토미 제임스',
    '토미, 제임스, 포코',
  ])('예외: 잘못된 구분자', (input) => {
    expect(() => Validator.validateCoachNames(input.split(','))).toThrow('[ERROR]');
  });

  test.each([
    '토미',
    '',
    '우아,한테,크코스,토미,제임스,포코',
  ])('예외: 인원수', (input) => {
    expect(() => Validator.validateCoachNames(input.split(','))).toThrow('[ERROR]');
  });

  test.each([
    '세종대왕,연산군,단종,김수한무거북이와두루미,김규',
  ])('예외: 이름 길이', (input) => {
    expect(() => Validator.validateCoachNames(input.split(','))).toThrow('[ERROR]');
  });
});

describe('못 먹는 메뉴 검사', () => {
  test.each([
    '',
    '김치',
    '김치,찌개',
  ])('정상', (input) => {
    expect(() => Validator.validateCannotEat(input.split(','))).not.toThrow();
  });

  test.each([
    '사과, 배',
  ])('예외: 잘못된 구분자', (input) => {
    expect(() => Validator.validateCannotEat(input.split(','))).toThrow('[ERROR]');
  });

  test.each([
    '사과,배,귤',
    '사과,배,물,귤',
  ])('예외: 인원수', (input) => {
    expect(() => Validator.validateCannotEat(input.split(','))).toThrow('[ERROR]');
  });
});
