const {
  validateCoachNameLength,
  validateCoachNameCount,
  validateFoodNameCount,
  validateFoodName,
} = require('../src/utils/Validator');

describe('유효성 검사기', () => {
  const shortCoachNames = ['', '짧'];
  test.each(shortCoachNames)('코치 이름을 2보다 짧게 입력한다.', (input) => {
    expect(() => validateCoachNameLength(input)).toThrow();
  });

  const longerCoachNames = ['길고긴이름', '긴이름입니다'];
  test.each(longerCoachNames)('코치 이름을 4보다 길게 입력한다.', (input) => {
    expect(() => validateCoachNameLength(input)).toThrow();
  });

  const smallerCoachNameCnt = [['코치1']];
  test.each(smallerCoachNameCnt)(
    '코치 이름을 2개보다 적게 입력한다.',
    (...input) => {
      expect(() => validateCoachNameCount(input)).toThrow();
    }
  );

  const largerCoachNameCnt = [
    ['코치1', '코치2', '코치3', '코치4', '코치5', '코치6'],
    ['코치1', '코치2', '코치3', '코치4', '코치5', '코치6', '코치7'],
  ];
  test.each(largerCoachNameCnt)(
    '코치 이름을 5개보다 많게 입력한다.',
    (...input) => {
      expect(() => validateCoachNameCount(input)).toThrow();
    }
  );

  const validCoachNames = [['토미', '제임스', '포코']];
  test.each(validCoachNames)('올바른 코치 이름들을 입력한다.', (...input) => {
    expect(() => {
      input.forEach((name) => validateCoachNameLength(name));
      validateCoachNameCount(input);
    }).not.toThrow();
  });

  const largerFoodNameCnt = [
    ['규동', '우동', '미소시루'],
    ['규동', '우동', '미소시루', '스시'],
  ];
  test.each(largerFoodNameCnt)(
    '못 먹는 음식을 2개보다 많게 입력한다.',
    (...input) => {
      expect(() => validateFoodNameCount(input)).toThrow();
    }
  );

  const invalidFoodNames = ['규도', '우도'];
  test.each(invalidFoodNames)('음식 목록에 없는 음식을 입력한다.', (input) => {
    expect(() => validateFoodName(input)).toThrow();
  });

  const validFoodNames = [
    ['우동', '스시'],
    ['뇨끼', '월남쌈'],
    ['마파두부', '고추잡채'],
    [''],
  ];
  test.each(validFoodNames)('올바른 음식 이름들을 입력한다.', (...input) => {
    expect(() => {
      validateFoodNameCount(input);
      input.forEach((name) => validateFoodName(name));
    }).not.toThrow();
  });
});
