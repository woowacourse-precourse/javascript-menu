const { isValidCoaches } = require('../src/utils/coachValidation');

describe('유효 데이터 테스트', () => {
  test.each(['가브리엘', '개구리,오징어,피카츄,라이츄,거북이,고양이'])('코치 입력 테스트 (코치 숫자)', (input) => {
    expect(() => {
      isValidCoaches(input);
    }).toThrow('[ERROR]');
  });
  test.each(['고,양,이', '고먐미미미,우테코코코'])('코치 입력 테스트 (코치 이름)', (input) => {
    expect(() => {
      isValidCoaches(input);
    }).toThrow('[ERROR]');
  });
});
