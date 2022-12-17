const { Console } = require('@woowacourse/mission-utils');
const { MenuMap } = require('../src/domain/MenuMap');
const RecommandMenu = require('../src/domain/RecommandMenu');

afterEach(() => {
  Console.close();
});

beforeEach(() => {
  recommandMenu = new RecommandMenu();
});

describe('RecommandMenu 클래스의 exceptHateFoodOfMenu 메서드 테스트', () => {
  test('싫어하는 음식이 제거되는지 확인', () => {
    jest.setTimeout(30000);
    const menu = ['치킨', '피자', '야채'];
    const hateFood = ['야채'];
    const result = recommandMenu.exceptHateFoodOfMenu(menu, hateFood);
    expect(result).toEqual(['치킨', '피자']);
  });
});

describe('RecommandMenu 클래스의 convertArray 메서드 테스트', () => {
  test('메뉴맵 형식의 문자열을 메뉴추천 프로그램에 맞는 형태의 배열로변환', () => {
    jest.setTimeout(30000);
    const menu = '참치, 김치';
    const expected = ['참치', '김치'];
    const result = recommandMenu.convertArray(menu);
    expect(result).toEqual(expected);
  });
});
