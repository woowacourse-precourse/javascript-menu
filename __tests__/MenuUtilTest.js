const MenuUtil = require('../src/util/menuUtil');

describe('MenuUtil 객체 테스트', () => {
  test('카테고리 찾기 테스트', () => {
    expect(MenuUtil.findCategoryByFoodName('팟타이')).toEqual('아시안');
  });
});
