/* eslint-disable */

const CategoryChooser = require('../src/model/CategoryChooser');
const { Random } = require('@woowacourse/mission-utils');

const testFunction = Random.pickNumberInRange;
jest.mock('@woowacourse/mission-utils');

const doMultipleMocks = (arr) => {
  arr.forEach((currentTest) => {
    testFunction.mockReturnValueOnce(currentTest);
  });
};

describe('[CategoryChooser] 랜덤 값이 결정되면 중복에 유의하여 올바른 카테고리들을 반환해야 한다.', () => {
  test('', () => {
    doMultipleMocks([1, 2, 3, 4, 5]);
    expect(CategoryChooser.choose()).toEqual([1, 2, 3, 4, 5]);
  });

  test('', () => {
    doMultipleMocks([1, 1, 1, 1, 1, 1, 1, 2, 3, 4]);
    expect(CategoryChooser.choose()).toEqual([1, 1, 2, 3, 4]);
  });

  test('', () => {
    doMultipleMocks([3, 3, 2, 2, 2, 4]);
    expect(CategoryChooser.choose()).toEqual([3, 3, 2, 2, 4]);
  });
});
