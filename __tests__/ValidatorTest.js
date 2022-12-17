const Validator = require("../src/util/Validator");

describe("Validator 클래스 테스트", () => {
  test("코치 인원이 2명 미만일 때 테스트", () => {
    expect(() => {
      Validator.validateCoachNames("정균");
    }).toThrow("[ERROR]");
  });

  test("코치 인원이 5명 초과일 때 테스트", () => {
    expect(() => {
      Validator.validateCoachNames("정균,정수,정훈,정호,정식,정신");
    }).toThrow("[ERROR]");
  });
});
