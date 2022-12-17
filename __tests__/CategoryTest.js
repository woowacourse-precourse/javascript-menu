const MissionUtils = require('@woowacourse/mission-utils');
const Category = require('../src/selector/Category');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('주간 카테고리 만들기 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5], ['일식', '한식', '중식', '아시안', '양식']],
    [[2, 5, 1, 3, 4], ['한식', '양식', '일식', '중식', '아시안']],
    [[1, 1, 2, 3, 4, 5], ['일식', '일식', '한식', '중식', '아시안']],
    [[1, 1, 2, 2, 2, 3, 4, 5], ['일식', '일식', '한식', '한식', '중식']],
  ])('테스트', (random, solution) => {
    mockRandoms(random);
    expect(Category.randomCategory(5)).toEqual(solution);
  });
});
