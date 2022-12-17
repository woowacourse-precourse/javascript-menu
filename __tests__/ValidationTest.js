const { ERROR_SUBJECT } = require('../src/Constant');
const Validation = require('../src/Validation');

describe('예외 조건 테스트', () => {
  test.each([
    ['영길,'],
    ['글자수가 6개,영길'],
    ['여,영길'],
    ['영길,영길'],
    ['영길,다애,덕수,민철,민수,종석'],
  ])('%s : 코치 이름 입력에 잘못된 값이 들어온다면 예외 처리 한다', (name) => {
    expect(() => Validation.coachAndName(name)).toThrow(ERROR_SUBJECT);
  });

  test.each([
    ['짬뽕,닭발,쌀국수'],
    ['짬뽕,짬뽕'],
    ['english'],
    ['엄청긴열자리가넘는메뉴이름'],
  ])(
    '%s : 싫어하는 메뉴 입력에 잘못된 값이 들어온다면 예외 처리 한다',
    (name) => {
      expect(() => Validation.menu(name)).toThrow(ERROR_SUBJECT);
    }
  );
});
