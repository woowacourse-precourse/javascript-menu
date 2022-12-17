const { Random } = require('@woowacourse/mission-utils');

const CreateCategoryNum = {
  createCategoryNum() {
    return Random.pickNumberInRange(1, 5);
  },
};

module.exports = CreateCategoryNum;
