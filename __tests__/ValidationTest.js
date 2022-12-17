const Validation = require('../src/Validation');

describe('메뉴 선정 검증 테스트', () => {
  test('한 주에 같은 카테고리를 두 번 이상 고를 수 없다', () => {
    const CURRENT_CATEGORIES = ['양식', '아시안', '양식'];
    const SELECTED_CATEGORY = '양식';

    expect(Validation.checkCategory(CURRENT_CATEGORIES, SELECTED_CATEGORY)).toBe(false);
  });

  test('코치가 못 먹는 메뉴는 고를 수 없다', () => {
    const MENU = '팟타이';
    const CURRENT_MENUS = [];
    const INEDIBLE_MENUS = ['팟타이', '짜장면'];

    expect(Validation.checkMenu(MENU, CURRENT_MENUS, INEDIBLE_MENUS)).toBe(false);
  });

  test('한 코치가 중복된 메뉴를 고를 수 없다', () => {
    const MENU = '스시';
    const CURRENT_MENUS = ['라자냐', '스시', '오니기리'];
    const INEDIBLE_MENUS = ['팟타이', '짜장면'];

    expect(Validation.checkMenu(MENU, CURRENT_MENUS, INEDIBLE_MENUS)).toBe(false);
  });
});
