const InputException = require('../src/utils/InputException');

describe('(코치) InputException 입력값 테스트', () => {
  test.each([['토미,제임스,포코,']])('(실패) 숫자 입력값 확인', (input) => {
    expect(() => InputException.checkCoach(input)).toThrow('[ERROR]');
  });

  test('(성공) 입력값', () => {
    const input = '토미,제임스,포코';
    expect(() => InputException.checkCoach(input)).not.toThrow();
  });
});
