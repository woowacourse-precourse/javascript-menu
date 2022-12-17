const {
  checkCategoryTwice,
  checkDuplicateFood,
} = require('../src/utils/Checker');

describe('확인자', () => {
  const categoryHistory = [1, 1, 2];
  const newCategory1 = 1;
  const newCategory2 = 2;
  const checkCategory = (category) =>
    checkCategoryTwice(categoryHistory, category);
  test('카테고리가 이미 2번 선택 되었는지 확인한다.', () => {
    expect(checkCategory(newCategory1)).toBeTruthy();
    expect(checkCategory(newCategory2)).toBeFalsy();
  });

  const foodHistory = ['규동', '라자냐'];
  const newFood1 = '규동';
  const newFood2 = '짜장면';
  const checkFood = (food) => checkDuplicateFood(foodHistory, food);

  test('음식이 이미 선택 되었는지 확인한다.', () => {
    expect(checkFood(newFood1)).toBeTruthy();
    expect(checkFood(newFood2)).toBeFalsy();
  });
});
