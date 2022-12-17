const MissionUtils = require('@woowacourse/mission-utils');

const Recommender = require('../src/Recommender');

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const mockShuffles = rows => {
  MissionUtils.Random.shuffle = jest.fn();

  rows.reduce((acc, [firstNumber, numbers]) => {
    return acc.mockReturnValueOnce([firstNumber, ...numbers.filter(number => number !== firstNumber)]);
  }, MissionUtils.Random.shuffle);
};

describe('추천 기능을 담당하는 객체 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('랜덤하게 생성한 숫자에 알맞는 카테고리를 반환해야 한다.', () => {
    const expectedCategories = ['중식', '아시안', '양식', '한식', '일식'];
    const result = [];

    mockRandoms([3, 4, 5, 2, 1]);

    for (let i = 0; i < expectedCategories.length; i++) {
      result.push(Recommender.getRecommendedCategory());
    }

    expect(result).toEqual(expectedCategories);
  });

  test('무작위로 섞은 메뉴 목록 중에서 첫 번째 메뉴를 반환해야 한다.', () => {
    const expectedMenus = ['깐풍기', '가츠동', '제육볶음'];
    const result = [];

    mockRandoms([3, 1, 2]);

    const sequenced = (_, idx) => idx + 1;
    mockShuffles([
      [1, Array.from({ length: 9 }, sequenced)],
      [5, Array.from({ length: 9 }, sequenced)],
      [9, Array.from({ length: 9 }, sequenced)],
    ]);

    for (let i = 0; i < expectedMenus.length; i++) {
      result.push(Recommender.getRecommendedMenu(Recommender.getRecommendedCategory()));
    }

    expect(result).toEqual(expectedMenus);
  });
});
