const Vaildator = require('../src/util/vaildator');

describe('Vaildator 객체 테스트', () => {
  test('코치 이름 길이의 유효성 검사 로직', () => {
    expect(Vaildator.isVaildNameLength('김수한무')).toEqual(true);
    expect(Vaildator.isVaildNameLength('거북이')).toEqual(true);
    expect(Vaildator.isVaildNameLength('윤성')).toEqual(true);
    expect(Vaildator.isVaildNameLength(',')).toEqual(false);
    expect(Vaildator.isVaildNameLength('빅')).toEqual(false);
  });

  test('못먹는 음식의 개수가 2개 이하인지 확인하는 기능', () => {
    expect(Vaildator.isVaildDislikeFoodsLength(['김치찌개', '쌈밥'])).toEqual(
      true
    );
    expect(Vaildator.isVaildDislikeFoodsLength(['김치찌개'])).toEqual(true);
    expect(Vaildator.isVaildDislikeFoodsLength([''])).toEqual(true);
    expect(
      Vaildator.isVaildDislikeFoodsLength(['김치찌개', '된장찌개', '쌈밥'])
    ).toEqual(false);
  });
});
