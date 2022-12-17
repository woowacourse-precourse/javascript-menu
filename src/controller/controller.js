const CATEGORIES = require('../constants/constants');
const Menu = require('../model/Menu');
const Coach = require('../model/Coach');
const Service = require('../services');
const View = require('../view/view');
const Category = require('../model/Category');

class Controller {
  constructor() {
    this.view = new View();
    this.categories = Object.entries(CATEGORIES)
      .map(([categoryName, { MENUS }]) => new Category(categoryName, MENUS));
    this.service = new Service(this.categories);
  }

  play() {
    this.view.showServiceStat();
    this.view.getCoaches((coaches) => {
      this.createCoach(coaches);
      this.askHates();
    });
  }

  askHates(coachIndex = 0) {
    if (coachIndex === this.coaches.length) return this.createRecommends();
    this.view.getHates(this.coaches[coachIndex].getName(), (hates) => {
      hates.forEach((hateMenuName) => {
        const [category] = this.categories.filter((category) => category.has(hateMenuName));
        this.coaches[coachIndex].addHate(new Menu(hateMenuName, category.getName()));
        this.askHates(coachIndex + 1);
      });
    });
  }

  createCoach(coaches) {
    this.coaches = coaches.map((name) => new Coach(name));
  }

  createRecommends() {
    /**
     * recommands = [[5][5][5][5][5]]
     */
    const recommands =  this.service.weeklyRecommend(this.coaches);

    this.view.showRecommands(recommands);
  }
}

module.exports = Controller;
