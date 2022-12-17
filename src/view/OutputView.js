const { Console } = require("@woowacourse/mission-utils");
const {
  OUTPUT_MESSAGE,
  RESULT_ELEMENT,
  WEEK,
  CATEGORY,
} = require("../constant/Constant");

const convertArrayToPrintFormat = (arrayToPrint) => {
  return (
    RESULT_ELEMENT.START +
    arrayToPrint.join(RESULT_ELEMENT.SEPARATOR) +
    RESULT_ELEMENT.END
  );
};

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printResult(categories, menusEachCoach) {
    Console.print(OUTPUT_MESSAGE.RESULT);
    Console.print(convertArrayToPrintFormat(Object.values(WEEK)));
    Console.print(convertArrayToPrintFormat([CATEGORY, ...categories]));
    OutputView.printRecommandedMenus(menusEachCoach);
    Console.print(OUTPUT_MESSAGE.END);
  },

  printRecommandedMenus(menusEachCoach) {
    for (const coachName in menusEachCoach) {
      const { recommandedMenus } = menusEachCoach[coachName];
      Console.print(
        convertArrayToPrintFormat([coachName, ...recommandedMenus]),
      );
    }
  },
};

module.exports = OutputView;
