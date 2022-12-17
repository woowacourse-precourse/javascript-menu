const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../util/constants/message');
const { WEEK, SIGN } = require('../util/constants/string');

const outputView = {
  printStart() {
    Console.print(MESSAGE.start);
  },

  printError(error) {
    Console.print(error);
  },

  printRecommendationResult(recommender) {
    this.printResultTitle();
    const coaches = recommender.getCoaches();
    coaches.forEach((member) => {
      this.printRecommendation(member.getRecommendation());
    });
    this.printResultComplete();
  },

  printResultTitle() {
    Console.print(MESSAGE.recommendResult);
    const weekString = Object.values(WEEK).join(SIGN.divider);
    const weekConcat = SIGN.opener.concat(weekString, SIGN.closer);
    0;
    Console.print(weekConcat);
  },

  printRecommendation(recommendation) {
    const recommendationString = recommendation.join(SIGN.divider);
    const recommendationConcat = SIGN.opener.concat(
      recommendationString,
      SIGN.closer
    );
    Console.print(recommendationConcat);
  },

  printResultComplete() {
    Console.print(MESSAGE.recommendComplete);
  },
};

module.exports = outputView;
