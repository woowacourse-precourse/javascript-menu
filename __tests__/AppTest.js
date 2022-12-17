const App = require('../src/App');

describe('App  기능 테스트', () => {
  describe('validateNames 테스트', () => {
    test('에러처리 테스트', () => {
      const app = new App();
      expect(() => app.validateNames(['포비', '포비'])).toThrow();
      expect(() => app.validateNames(['포비', '비'])).toThrow();
      expect(() => app.validateNames(['포비'])).toThrow();

      expect(() => app.validateNames(['포비', '구구'])).not.toThrow();
      expect(() => app.validateNames(['포비', '비비'])).not.toThrow();
      expect(() => app.validateNames(['포비', '비비', '지윤'])).not.toThrow();
    });
  });
});
