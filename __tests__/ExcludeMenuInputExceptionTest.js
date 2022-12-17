const InputView = require('../src/view/InputView');
const { ERROR_MESSAGES } = require('../src/constant/Messages');

describe('못 먹는 메뉴 입력 예외 테스트', () => {
  test.each([['우동,스시,월남쌈'], ['우동,스시,뇨끼,월남쌈']])('메뉴가 초과된 경우', (input) => {
    expect(() => {
      InputView.handleWrongExcludeMenus(input);
    }).toThrow(ERROR_MESSAGES.numberOfMenus);
  });
});
