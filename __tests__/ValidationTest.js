const { validateCoachName, validateDislikeMenu } = require('../src/utils/validate');

describe('코치 이름 예외 케이스', () => {
  test.each([['포비'], ['포비', '크롱', '뽀로로', '루피', '에디']])(
    '코치의 수가 1명 이하 5명 이상이면 예외가 발생한다.',
    (input) => {
      expect(() => {
        validateCoachName(input).toThrow('[ERROR]');
      });
    }
  );
  test.each([
    ['포', '비'],
    ['포', '비', '크롱뽀로로'],
  ])('코치의 이름이 1글자 이하이거나 5글자 이상이면 예외가 발생한다..', (input) => {
    expect(() => {
      validateCoachName(input).toThrow('[ERROR]');
    });
  });
});

describe('못 먹는 메뉴 예외 케이스', () => {
  test.each([['김밥', '우동', '볶음면']])(
    '못 먹는 메뉴가 2개 이상인 경우 예외가 발생한다.',
    (input) => {
      expect(() => {
        validateDislikeMenu(input).toThrow('[ERROR]');
      });
    }
  );
});
