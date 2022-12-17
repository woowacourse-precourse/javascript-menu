const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constants/message");

const OutputView = {
  printServiceStart() {
    Console.print(OUTPUT_MESSAGE.serviceStart);
  },

  printResultRecommendMenu(categroys, coach) {
    Console.print(OUTPUT_MESSAGE.resultRecommandMenuAlert);
    Console.print(OUTPUT_MESSAGE.weekdaysClassification);
    Console.print(
      `[ ${OUTPUT_MESSAGE.category}${
        OUTPUT_MESSAGE.divisionLine
      }${categroys.join(OUTPUT_MESSAGE.divisionLine)} ]`
    );
    Object.keys(coach).forEach((coachName) => {
      Console.print(
        `[ ${coachName}${OUTPUT_MESSAGE.divisionLine}${coach[
          coachName
        ].ateMenu.join(OUTPUT_MESSAGE.divisionLine)} ]`
      );
    });
    Console.print(OUTPUT_MESSAGE.recommandFinishAlert);
  },
};

module.exports = OutputView;
