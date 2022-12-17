const Exception = require('../src/Exception');

describe('사용자 입력 값에 대한 예외 테스트', () => {
  test('코치 이름이 최소 2글자, 최대 4글자가 아닌 값을 포함하면 입력하면 예외가 발생한다', () => {
    expect(() => {
      Exception.checkCoachesInput('로이,엘리,네이마르 주니오르');
    }).toThrow('[ERROR]');
  });

  test('코치들이 최소 2명, 최대 5명까지 입력하지 않고 쉼표(,)로 구분되지 않으면 예외가 발생한다', () => {
    const INPUTS = ['로이,엘리,저스디스,알티,키드밀리,기리보이', '로이.루이.엘라'];

    INPUTS.forEach((input) => {
      expect(() => {
        Exception.checkCoachesInput(input);
      }).toThrow('[ERROR]');
    });
  });

  test('못 먹는 메뉴는 최소 0개, 최대 2개를 입력하지 않고 쉼표(,)로 구분되지 않으면 예외가 발생한다', () => {
    const INPUTS = ['팟타이,스시,오니기리', '팟타이.스시', '파인애플 볶음밥!스시'];

    INPUTS.forEach((input) => {
      expect(() => {
        Exception.checkInedibleMenusInput(input);
      }).toThrow('[ERROR]');
    });
  });

  test('입력 값이 쉼표(,)로 구분되지 않으면 예외가 발생한다', () => {
    const INPUTS = ['팟타이.스시 오니기리', '로이.스시!루이'];

    INPUTS.forEach((input) => {
      expect(() => {
        Exception.checkInedibleMenusInput(input);
      }).toThrow('[ERROR]');
    });
  });
});
