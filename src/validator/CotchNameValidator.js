class CotchNameValidator {
  constructor(cotchs) {
    this.validate(cotchs);
  }
  validate(cotchs) {
    // const cotchs = names.split(',').map((cotch) => cotch.trim());
    if (this.isCotchsRange(cotchs)) throw new Error('[ERROR] 최소 2명, 최대 5명이 함께 식사할 수 있습니다.');
    cotchs.forEach((cotch) => {
      if (!this.isString(cotch)) throw new Error('[ERROR] 한글로 입력해야 합니다.');
      if (this.isNameRange(cotch)) throw new Error('[ERROR] 최소 2글자, 최대 4글자를 입력해야 합니다.');
    });
    return cotchs;
  }
  isCotchsRange(cotchs) {
    return cotchs.length < 2 || cotchs.length > 5;
  }
  isString(name) {
    const typeTest = /^[가-힣]+$/;
    return typeTest.test(name);
  }
  isNameRange(name) {
    return name.length < 2 || name.length > 4;
  }
}
module.exports = CotchNameValidator;
