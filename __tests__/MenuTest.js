const MenuMaker = require('../src/MenuMaker');

describe('랜덤 메뉴를 추천하는 함수 테스트', () => {
  const categories = [1, 2, 3, 4, 5];
  const dislikeMenu = [];
  test('랜덤 메뉴는 총 5가지가 추천되어야 한다.', () => {
    const menu = new MenuMaker(categories, dislikeMenu).createMenu();
    expect(menu).toHaveLength(5);
  });

  test('메뉴 생성 클래스의 createMenu는 배열을 리턴한다', () => {
    const menu = new MenuMaker(categories, dislikeMenu).createMenu();
    expect(menu).toBeInstanceOf(Array);
  });

  test('메뉴는 중복되지 않아야 한다.', () => {
    const menu = new MenuMaker(categories, dislikeMenu).createMenu();
    const menuSet = [...new Set(menu)];
    expect(menuSet).toHaveLength(5);
  });
});
