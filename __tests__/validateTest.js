const InputException = require('../src/utils/InputException');

describe('(잔돈) InputException 입력값 테스트', () => {
  test.each([['토미,제임스,포코,']])('(실패) 숫자 입력값 확인', (input) => {
    expect(() => InputException.checkCoach(input)).toThrow('[ERROR]');
  });

  test('(성공) 재시작/종료 입력값 확인', () => {
    const input = '토미,제임스,포코';
    expect(() => InputException.checkCoach(input)).not.toThrow();
  });
});
