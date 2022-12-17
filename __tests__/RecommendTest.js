const MissionUtils = require('@woowacourse/mission-utils');
const Recommend = require('../src/Recommend');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('무작위 추천기 테스트', () => {
  test.each([
    [[1], ['일식']],
    [[1, 2, 3, 4, 5], ['일식', '한식', '중식', '아시안', '양식']],
  ])('카테고리 선택 테스트', (random, solution) => {
    mockRandoms(random);
    const answer = [];
    while (answer.length < solution.length) {
      answer.push(Recommend.randomCategory());
    }
    expect(answer).toEqual(solution);
  });
});
