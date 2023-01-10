const { Console } = require('@woowacourse/mission-utils');
const { MenuMap } = require('../src/domain/MenuMap');
const RecommendMenu = require('../src/domain/RecommendMenu');

afterEach(() => {
  Console.close();
});

beforeEach(() => {
  recommendMenu = new RecommendMenu();
});

describe('RecommendMenu 클래스의 pickRandomMenuStyle() 테스트', () => {
  test('MenuMap에 들어있는 메뉴 스타일에 포함된 메뉴스타일인지 확인', () => {
    const randomMenuStyle = recommendMenu.pickRandomMenuStyle();
    const validMenuStyle = [...recommendMenu.menu.keys()].join(', ');
    expect(validMenuStyle).toEqual(expect.stringContaining(randomMenuStyle));
  });
});

describe('RecommendMenu 클래스의 createRandomCateroy() 테스트', () => {
  test('메서드로 생성된 배열의 길이가 맞는지 확인', () => {
    const category = recommendMenu.createRandomCateroy();
    expect(category).toHaveLength(5);
  });
});

describe('RecommendMenu 클래스의 shuffleArray() 테스트', () => {
  test('parameter로 받는 수만큼의 배열이 생성되었는지 확인', () => {
    const category = recommendMenu.shuffleArray(9);
    expect(category).toHaveLength(9);
  });
});

describe('RecommendMenu 클래스의 create() 테스트', () => {
  test('연속된 음식이 없는지 확인', () => {
    const menu = recommendMenu.create(['김밥', '치킨'], ['한식', '한식', '한식', '한식', '한식']);
    const stack = [];
    menu.forEach(food => {
      if (food !== stack[stack.length]) {
        stack.push(food);
        return;
      }
      stack.pop();
    });
    expect(stack).toHaveLength(5);
  });
});
