const MissionUtils = require('@woowacourse/mission-utils');
const Recommend = require('../src/selector/Recommend');

const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안:
    '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const mockShuffles = (rows) => {
  MissionUtils.Random.shuffle = jest.fn();

  rows.reduce(
    (acc, [firstNumber, numbers]) => (
      acc.mockReturnValueOnce([firstNumber, ...numbers.filter((number) => number !== firstNumber)])
    ),
    MissionUtils.Random.shuffle,
  );
};

const sequenced = (_, idx) => idx + 1;

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

  test.each([
    [[9, Array.from({ length: 9 }, sequenced)], '일식', '오코노미야끼'],
    [[1, Array.from({ length: 9 }, sequenced)], '한식', '김밥'],
    [[5, Array.from({ length: 9 }, sequenced)], '중식', '짬뽕'],
    [[5, Array.from({ length: 9 }, sequenced)], '아시안', '쌀국수'],
    [[4, Array.from({ length: 9 }, sequenced)], '양식', '끼슈'],
  ])('메뉴 선택 테스트', (shuffles, category, solution) => {
    mockShuffles([shuffles]);
    expect(Recommend.randomMenu(category, SAMPLE)).toEqual(solution);
  });
});
