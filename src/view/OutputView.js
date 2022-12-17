const { Console } = require("@woowacourse/mission-utils");
const { COACH_NAME, RECOMMENDATION } = require("../constants/Messages");

const OutputVIew = {
  printFirstMessage() {
    Console.print(COACH_NAME.OPENING);
  },

  printError(errorLog) {
    Console.print(errorLog.message);
  },

  printCategory(categories) {
    Console.print(`[ 카테고리 | ${categories.join(" | ")} ]`);
  },

  printFoodRecommendations(singleCoach) {
    Console.print(`[ ${singleCoach.name} | ${singleCoach.recommendedFood.join(" | ")} ]`);
  },

  printResult(categories, overallInformation) {
    Console.print(RECOMMENDATION.OPENING);
    Console.print(RECOMMENDATION.DAYS);
    this.printCategory(categories);
    for (const singleCoach of overallInformation) {
      this.printFoodRecommendations(singleCoach);
    }
    Console.print(RECOMMENDATION.CLOSING);
  },
};

module.exports = OutputVIew;
