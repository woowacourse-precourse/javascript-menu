/* eslint-disable */
const HateFoodInputValidation = require("../src/validation/HateFoodInputValidation");
describe("못먹는 음식 input 테스트", () => {
  test("못먹는 음식 input 테스트", () => {
    expect(() => {
      HateFoodInputValidation.validate("");
    }).not.toThrow("[ERROR]");
  });

  test("못먹는 음식 input 테스트", () => {
    expect(() => {
      HateFoodInputValidation.validate("aa,bb,cc,dd,ee,ff");
    }).toThrow("[ERROR]");
  });

  test("못먹는 음식 input 테스트", () => {
    expect(() => {
      HateFoodInputValidation.validate("김치찌게");
    }).not.toThrow("[ERROR]");
  });
});
