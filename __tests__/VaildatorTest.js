const {
  isValidCoachNumber,
  isValidNameLength,
  isValidDislikeFoodsLength,
} = require('../src/util/Validator');

describe('Vaildator 객체 테스트', () => {
  test('코치 이름 길이의 유효성 검사 로직', () => {
    expect(isValidNameLength('김수한무')).toEqual(true);
    expect(isValidNameLength('거북이')).toEqual(true);
    expect(isValidNameLength('윤성')).toEqual(true);
    expect(isValidNameLength(',')).toEqual(false);
    expect(isValidNameLength('빅')).toEqual(false);
  });

  test('못먹는 음식의 개수가 2개 이하인지 확인하는 기능', () => {
    expect(isValidDislikeFoodsLength(['김치찌개', '쌈밥'])).toEqual(true);
    expect(isValidDislikeFoodsLength(['김치찌개'])).toEqual(true);
    expect(isValidDislikeFoodsLength([''])).toEqual(true);
    expect(isValidDislikeFoodsLength(['김치찌개', '된장찌개', '쌈밥'])).toEqual(
      false
    );
  });

  test('코치의 수가 유효범위 이내인지 검사', () => {
    expect(isValidCoachNumber(['한명'])).toEqual(false);
    expect(isValidCoachNumber(['한명', '두명'])).toEqual(true);
    expect(isValidCoachNumber(['한명', '두명', '세명'])).toEqual(true);
    expect(isValidCoachNumber(['한명', '두명', '세명', '네명'])).toEqual(true);
    expect(
      isValidCoachNumber(['한명', '두명', '세명', '네명', '다섯명'])
    ).toEqual(true);
    expect(
      isValidCoachNumber(['한명', '두명', '세명', '네명', '다섯명', '여섯명'])
    ).toEqual(false);
  });
});
