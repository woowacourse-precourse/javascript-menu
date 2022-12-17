const SplitAndTrim = require('../src/utils/SplitAndTrim');

describe('미션 중 사용하는 함수 테스트', () => {
  test.each([
    ['영길,', ['영길', '']],
    ['글자수가 6개,영길', ['글자수가 6개', '영길']],
    ['여,영길', ['여', '영길']],
    ['영길,영길', ['영길', '영길']],
  ])(
    '%s : 문자열이 들어오면 콤마 기준으로 나누고 공백을 제거하여 배열을 반환한다.',
    (name, result) => {
      expect(SplitAndTrim(name)).toEqual(result);
    }
  );
});
