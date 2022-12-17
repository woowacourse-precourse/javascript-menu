const ViewController = {
  DAYS: '구분',
  CATEGORY: '카테고리',

  buildMenuResult({ days, categories, coaches }) {
    const dayView = ViewController.buildDayView(days);
    const categoryView = ViewController.buildCategoriView(categories);
    const coachMenuView = ViewController.buildCoachMenuView(coaches);

    return dayView + '\n' + categoryView + '\n' + coachMenuView;
  },

  buildDayView(days) {
    return ViewController.buildStrings(ViewController.DAYS, days);
  },

  buildCategoriView(categories) {
    return ViewController.buildStrings(ViewController.CATEGORY, categories);
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
