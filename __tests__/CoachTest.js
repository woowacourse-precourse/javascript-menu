const Coach = require("../src/domain/Coach");

describe("코치 클래스 테스트", () => {
  test("코치 객체 생성시 유효하지 않은 닉네임이 포함되어 있으면 에러를 발생시킨다.", () => {
    const invalidCoachNames = ["네글자이상", "1"];

    invalidCoachNames.forEach((name) => {
      expect(() => {
        new Coach(name);
      }).toThrow("[ERROR]");
    });
  });
});
