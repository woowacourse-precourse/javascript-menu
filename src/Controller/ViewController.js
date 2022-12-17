const ViewController = {
  buildMenuResult({ days, categories, coaches }) {
    const dayView = ViewController.buildDayView(days);
    const categoryView = ViewController.buildCategorieView(categories);
    const coachMenuView = ViewController.buildCoachMenuView(coaches);

    return dayView + '\n' + categoryView + '\n' + coachMenuView;
  },

  buildDayView(days) {
    return ViewController.buildStrings('구분', days);
  },

  buildCategorieView(categories) {
    return ViewController.buildStrings('카테고리', categories);
  },

  buildCoachMenuView(coaches) {
    return coaches
      .map((coach) =>
        ViewController.buildStrings(coach.getName(), coach.getMenus()),
      )
      .join('\n');
  },

  buildStrings(title, contents) {
    return `[ ${title} | ` + contents.join(' | ') + ' ]';
  },
};

module.exports = ViewController;
