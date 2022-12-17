const Vaildator = require('../src/util/vaildator');

describe('Vaildator 객체 테스트', () => {
  test('코치 이름 길이의 유효성 검사 로직', () => {
    expect(Vaildator.isVaildNameLength('김수한무')).toEqual(true);
    expect(Vaildator.isVaildNameLength('거북이')).toEqual(true);
    expect(Vaildator.isVaildNameLength('윤성')).toEqual(true);
    expect(Vaildator.isVaildNameLength(',')).toEqual(false);
    expect(Vaildator.isVaildNameLength('빅')).toEqual(false);
  });
});
