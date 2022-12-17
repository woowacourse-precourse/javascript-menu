const InputProcessor = require('../src/util/InputProcessor');

describe('InputProcessor 객체 테스트', () => {
  test('코치 이름 파싱 테스트', () => {
    expect(
      InputProcessor.parseCommaStringsToArray(' 포비, 윤성 , 연수 ')
    ).toEqual(['포비', '윤성', '연수']);
  });
});
