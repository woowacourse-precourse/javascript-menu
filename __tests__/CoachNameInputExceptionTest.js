const InputView = require('../src/view/InputView');
const { ERROR_MESSAGES } = require('../src/constant/Messages');

describe('코치들 이름 입력 예외 테스트', () => {
  test.each([['지은'], ['최지민']])('인원수가 적은 경우', (input) => {
    expect(() => {
      InputView.handleWrongCoachNamesException(input);
    }).toThrow(ERROR_MESSAGES.lessNumberOfCoaches);
  });

  test.each([['지은,희은,세연,지민,지나,수민']])('인원수가 많은 경우', (input) => {
    expect(() => {
      InputView.handleWrongCoachNamesException(input);
    }).toThrow(ERROR_MESSAGES.moreNumberOfCoaches);
  });

  test.each([['최지민지민,지은,세연'], ['한,지은,세연']])('이름 길이가 맞지 않는 경우', (input) => {
    expect(() => {
      InputView.handleWrongCoachNamesException(input);
    }).toThrow(ERROR_MESSAGES.lengtOfCoachName);
  });
});
