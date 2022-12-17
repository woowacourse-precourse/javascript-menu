const MissionUtils = require('@woowacourse/mission-utils');
const Coach = require('../src/Coach');

const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안:
    '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
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

describe('식단표 작성 테스트', () => {
  test.each([
    [
      [
        [9, Array.from({ length: 9 }, sequenced)],
        [1, Array.from({ length: 9 }, sequenced)],
        [5, Array.from({ length: 9 }, sequenced)],
        [5, Array.from({ length: 9 }, sequenced)],
        [4, Array.from({ length: 9 }, sequenced)],
      ],
      ['일식', '한식', '중식', '아시안', '양식'],
      [],
      ['오코노미야끼', '김밥', '짬뽕', '쌀국수', '끼슈'],
    ],
    [
      [
        [9, Array.from({ length: 9 }, sequenced)],
        [1, Array.from({ length: 9 }, sequenced)],
        [2, Array.from({ length: 9 }, sequenced)],
        [3, Array.from({ length: 9 }, sequenced)],
        [5, Array.from({ length: 9 }, sequenced)],
        [5, Array.from({ length: 9 }, sequenced)],
        [4, Array.from({ length: 9 }, sequenced)],
      ],
      ['일식', '한식', '중식', '아시안', '양식'],
      ['김치찌개', '김밥'],
      ['오코노미야끼', '쌈밥', '짬뽕', '쌀국수', '끼슈'],
    ],
    [
      [
        [9, Array.from({ length: 9 }, sequenced)],
        [3, Array.from({ length: 9 }, sequenced)],
        [5, Array.from({ length: 9 }, sequenced)],
        [5, Array.from({ length: 9 }, sequenced)],
        [9, Array.from({ length: 9 }, sequenced)],
        [9, Array.from({ length: 9 }, sequenced)],
        [9, Array.from({ length: 9 }, sequenced)],
        [5, Array.from({ length: 9 }, sequenced)],
      ],
      ['양식', '한식', '중식', '아시안', '양식'],
      ['김치찌개', '김밥'],
      ['파니니', '쌈밥', '짬뽕', '쌀국수', '프렌치 토스트'],
    ],
  ])('코치 1명의 5일치 식단표', (shuffles, categories, cannotEat, solution) => {
    mockShuffles(shuffles);
    const coach = new Coach(cannotEat);
    expect(coach.determineMenu(5, categories, SAMPLE)).toEqual(solution);
  });
});
