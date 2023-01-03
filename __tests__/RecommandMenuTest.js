const { Console } = require('@woowacourse/mission-utils');
const { MenuMap } = require('../src/domain/MenuMap');
const RecommendMenu = require('../src/domain/RecommandMenu');

afterEach(() => {
  Console.close();
});

beforeEach(() => {
  recommendMenu = new RecommendMenu();
});

describe(' RecommendMenu 클래스의 pickRandomMenuStyle() 테스트', () => {
  test('MenuMap에 들어있는 메뉴 스타일에 포함된 메뉴스타일인지 확인', () => {
    const randomMenuStyle = recommendMenu.pickRandomMenuStyle();
    const validMenuStyle = [...recommendMenu.menu.keys()].join(', ');
    console.log(validMenuStyle);
    expect(validMenuStyle).toEqual(expect.stringContaining(randomMenuStyle));
  });
});
