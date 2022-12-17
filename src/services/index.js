const CATEGORIES = require('../constants/constants');
const RULE = require('../constants/rule.constants');
const Category = require('../model/Category');
const Recommender = require('../model/Recommender');
/**
 * @class
 *
 */
class Service {
  coach = [];
  days = 5;
  constructor(categories) {
    this.Recommender = new Recommender(categories);
  }

  recommendMenu(coach) {
    const category = this.Recommender.recommendCategory(coach);
    return this.Recommender.recommendMenu(coach, category);
  }

  dailyRecommend(coaches) {
    for (const coach of coaches) coach.eat(this.recommendMenu(coach));
    const isNeedReRecommend = coaches.some((coach, index, origin) => {
      const others = origin.splice(index, 1);
      const sameEater = Service.#getSameEater(others, coach);
      if (sameEater < RULE.MIN_SAME_MENU_ATE_COACH
        || sameEater > RULE.MAX_SAME_MENU_ATE_COACH) {
        return true;
      }
      return false;
    });
    if (isNeedReRecommend) this.reRecommend(coaches);
  }

  reRecommend(coaches) {
    for (const coach of coaches) {
      coach.abortRecommend();
    }
    this.dailyRecommend();
  }

  static #getSameEater(others, coach) {
    return others
      .filter((otherCoach) => otherCoach
        .isAteToday(coach
          .getLastAte()))
      .length;
  }

  weeklyRecommend(coach, others) {
    const weeklyMenu = [];
    for (let day = 0; day < this.days; day++) {
      this.push(this.dailyRecommend(coach, others));
    }
    return { name: coach.getName(), weeklyMenu };
  }
}

module.exports =  Service;
