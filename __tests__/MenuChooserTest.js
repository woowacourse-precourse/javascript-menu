/* eslint-disable */

const MenuChooser = require('../src/model/MenuChooser');
const { Random } = require('@woowacourse/mission-utils');

const testFunction = Random.shuffle;
jest.mock('@woowacourse/mission-utils');

const doMultipleMocks = (arr) => {
  arr.forEach((currentTest) => {
    testFunction.mockReturnValueOnce(currentTest);
  });
};

describe('[MenuChooser] 랜덤 값이 결정되면 중복에 유의하여 올바른 음식 메뉴들을 반환해야 한다.', () => {
  test('', () => {
    doMultipleMocks([
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 0, 0, 0, 0, 0, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 0, 0],
      [9, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    const menuChooser = new MenuChooser();
    expect(menuChooser.choose([1, 2, 3, 4, 5], [''])).toEqual([
      '규동',
      '쌈밥',
      '마파두부',
      '반미',
      '파니니',
    ]);
  });

  test('', () => {
    doMultipleMocks([
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 0, 0, 0, 0, 0, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 0, 0],
      [9, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 0, 0, 0, 0, 0, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    const menuChooser = new MenuChooser();
    expect(menuChooser.choose([1, 2, 3, 5, 5], ['피자', '파니니'])).toEqual([
      '규동',
      '쌈밥',
      '마파두부',
      '스파게티',
      '바게트',
    ]);
  });
});
