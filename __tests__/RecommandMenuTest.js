const { Console } = require('@woowacourse/mission-utils');
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
