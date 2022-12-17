const CategoryMaker = require('../src/CategoryMaker');

describe('랜덤 카테고리를 만드는 함수 테스트', () => {
  test('카테고리는 중복을 2개까지만 허용한다.', () => {
    const categories = CategoryMaker.createCategory();
    const occurrence = new Array(6).fill(0);
    for (const category of categories) {
      occurrence[category] += 1;
    }
    const size = occurrence.filter((el) => el > 2).length;
    expect(size).toBe(0);
  });

  test('총 5가지의 카테고리를 생성해야한다.', () => {
    const categories = CategoryMaker.createCategory();
    expect(categories).toHaveLength(5);
  });

  test('카테고리 생성 함수는 배열을 리턴한다.', () => {
    const categories = CategoryMaker.createCategory();
    expect(categories).toBeInstanceOf(Array);
  });
});
