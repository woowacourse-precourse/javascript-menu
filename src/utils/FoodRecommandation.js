const { Random } = require('@woowacourse/mission-utils');

const CATEGORIES = Object.freeze({
  japen: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  korea: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  china: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  asia: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  western: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
});

const categoryFormatter = (categories) => {
  const menus = Object.values(categories);
  return menus.reduce((acc, menu) => {
    const foods = menu.split(', ');
    acc.push(foods);
    return acc;
  }, []);
};

const isCourseDuplicateMax = (courseNumbers, number) => {
  if (courseNumbers.filter((courseNumber) => number === courseNumber).length > 1) {
    return true;
  }
  return false;
};

const makeCourseNumbers = () => {
  const courseNumbers = [];
  while (courseNumbers.length < 5) {
    const number = Random.pickNumberInRange(1, 5);
    if (!isCourseDuplicateMax(courseNumbers, number)) {
      courseNumbers.push(number);
    }
  }
  return courseNumbers;
};

const recommandFood = (excludeFood) => {
  const category = categoryFormatter(CATEGORIES);
  const courseNumbers = makeCourseNumbers();
  return courseNumbers.reduce((recommand, courseNumber) => {
    const menus = category[courseNumber - 1];
    const menu = getMenu(recommand, menus, excludeFood.split(', '));
    recommand.push(menu);
    return recommand;
  }, []);
};

const getMenu = (recommand, menus, excludeFood) => {
  let menu = '';
  while (menu === '') {
    const menuNumber = Random.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8])[0];
    const food = recommand + excludeFood;
    if (!food.includes(menus[menuNumber])) {
      menu = menus[menuNumber];
    }
  }
  return menu;
};

module.exports = recommandFood;

console.log(recommandFood('규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘'));
