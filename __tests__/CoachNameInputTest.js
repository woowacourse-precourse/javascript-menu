/* eslint-disable */
const CoachNameInputValidation = require("../src/validation/CoachNameInputValidation");
describe("코치 이름 입력 유효성 테스트", () => {
  test("코치 이름 input 테스트", () => {
    expect(() => {
      CoachNameInputValidation.validate("");
    }).toThrow("[ERROR]");
  });

  test("코치 이름 input 테스트", () => {
    expect(() => {
      CoachNameInputValidation.validate("aa,bb,cc,dd,ee,ff");
    }).toThrow("[ERROR]");
  });

  test("코치 이름 input 테스트", () => {
    expect(() => {
      CoachNameInputValidation.validate("aa");
    }).toThrow("[ERROR]");
  });

  test("코치 이름 input 테스트", () => {
    expect(() => {
      CoachNameInputValidation.validate("aaaaa,bb");
    }).toThrow("[ERROR]");
  });
});
