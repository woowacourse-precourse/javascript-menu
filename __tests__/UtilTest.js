const findFoodLocation = require('../src/utils/findFoodLocation');

describe('유틸함수 테스트 모음', () => {
  test('음식 위치 찾기 유틸함수', () => {
    expect(findFoodLocation('규동,우동')).toEqual([
      [0, 0],
      [0, 1],
    ]);
  });
});
