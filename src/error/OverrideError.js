const MyError = require('./MyError');

const OverrideError = class extends MyError {
  constructor() {
    super('메서드를 작성해주세요.');
  }
};

module.exports = OverrideError;
