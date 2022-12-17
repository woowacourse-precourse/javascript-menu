const Validations = require("../src/Validations")

describe("입력값 오류 테스트", () => {
  test("코치 이름의 길이 유효성 검증", () => {
      const input = ["우", "우아한테크"]
      expect(() => {
        Validations.validateLength(input);
      }).toThrow("[ERROR]");
  });
    
  test("코치 이름의 갯수 유효성 검증", () => {
    const input = ["우"]
    expect(() => {
      Validations.validateCount(input);
    }).toThrow("[ERROR]");
  });

});
