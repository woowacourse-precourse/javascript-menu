const resultTemplateMaker = {
  getRecommendResultTemplate(categories, coachNames, menus) {
    const templates = [
      '메뉴 추천 결과입니다.',
      '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
    ];

    templates.push(resultTemplateMaker.getCategoryTemplate(categories));
    resultTemplateMaker
      .getMenusTemplate(coachNames, menus)
      .forEach((temp) => templates.push(`[ ${temp} ]`));

    templates.push('추천을 완료했습니다.');
    return templates;
  },

  getCategoryTemplate(categories) {
    const template = ['카테고리'];
    categories.forEach((category) => template.push(category));

    return `[ ${template.join(' | ')} ]`;
  },

  getMenusTemplate(coachNames, menus) {
    const template = [];
    menus.forEach((menu, idx) => {
      const temp = [];
      temp.push(coachNames[idx]);
      const str = menu.join(' | ');
      temp.push(str);

      template.push(temp.join(' | '));
    });

    return template;
  },
};

module.exports = resultTemplateMaker;
