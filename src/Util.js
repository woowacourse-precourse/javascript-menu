const { Console, Random } = require("@woowacourse/mission-utils");
const SAMPLE = require("./Constants");

const catchError = (input, validation) => {
  try {
    return validation(input);
  } catch (error) {
    Console.print(error);
    return false;
  }
};

const makeRandomNumber = () => {
  return Random.pickNumberInRange(1, 5);
};

const makeRandomCategory = () => {
  const categories = new Map();
  categoryArray = Object.keys(SAMPLE);
  categoryArray.map((category, index) => {
    categories.set(index + 1, category);
  });
  const recommendCategory = categories.get(makeRandomNumber());
  return recommendCategory;
};

module.exports = { catchError, makeRandomCategory };
