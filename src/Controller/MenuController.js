const { Console } = require('@woowacourse/mission-utils');
const Randomgenerator = require('../Models/Randomgenerator');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const NameCheck = require('../Models/NameCheck');
const FoodCheck = require('../Models/FoodCheck');
const MenuSelect = require('../Models/MenuSelect');

class MenuController {
  allFood = [
    ['규동', '우동', '미소시루', '스시', '가츠동', '오니기리', '하이라이스', '라멘', '오코노미야끼'],
    ['김밥', '김치찌개', '쌈밥', '된장찌개', '비빔밥', '칼국수', '불고기', '떡볶이', '제육볶음'],
    ['깐풍기', '볶음면', '동파육', '짜장면', '짬뽕', '마파두부', '탕수육', '토마토 달걀볶음', '고추잡채'],
    ['팟타이', '카오 팟', '나시고렝', '파인애플 볶음밥', '쌀국수', '똠얌꿍', '반미', '월남쌈', '분짜'],
    ['라자냐', '그라탱', '뇨끼', '끼슈', '프렌치 토스트', '바게트', '스파게티', '피자', '파니니']
  ];
  coachNames = [];
  index = 0;
  notFoods = [];
  category = [];
  eachFood = new Set();
  finalFood = [];
  count = 0;
  categoryAnswer = ['카테고리'];

  constructor() {
    this.NameCheck = new NameCheck();
    this.FoodCheck = new FoodCheck();
    this.MenuSelect = new MenuSelect();
    OutputView.startMessage();
  };

  inputSize() {
    InputView.inputNames(name => {
      this.isValidCoach(this.NameCheck.validate(name), name);
    });
  };

  isValidCoach(isValid, coachName) {
    if (!isValid) {
      return this.inputSize();
    };

    this.coachNames = coachName.split(',');
    this.foodInputStart();
  };

  foodInputStart() {
    if (this.index < this.coachNames.length) {
      return this.notFoodInput();
    };

    // this.finalFood = Array.from(Array(1), () => Array(this.coachNames.length).fill(null));
    
    this.index = 0;
    return this.randomCategoryChoose();
  };

  notFoodInput() {
    InputView.inputNotFood(this.coachNames[this.index], food => {
      this.foodValidate(this.FoodCheck.validate(food), food);
    });
  };

  foodValidate(isValid, food) {
    if (!isValid) {
      return this.notFoodInput();
    };

    this.setNotFood(food);
  };

  setNotFood(food) {
    this.notFoods.push(food.split(','));
    Console.print(this.notFoods)
    this.index += 1;
    this.foodInputStart();
  };

  randomCategoryChoose() {
    if (this.category.length < 5) {
      return this.setcategory(Randomgenerator.categoryGenerate())
    };
    
    return this.setMenu();
  };

  setcategory(randomCategory) {
    if (this.category.filter(eachCategory => eachCategory === randomCategory).length === 2) {
      return this.randomCategoryChoose();
    };

    this.category.push(randomCategory);
    return this.randomCategoryChoose();
  };

  setMenu() {
    let personFood = Randomgenerator.menuGenerate();
    let tmp = this.allFood[this.category[this.count]];
    return this.eachPersonMenu(tmp[personFood]);
  };

  eachPersonMenu(eachMenu) {
    if (this.notFoods[this.index].includes(eachMenu)) {
      return this.setMenu();
    };

    this.eachFood.add(eachMenu);
    return this.menumenu();
  }

  menumenu() {
    if (this.eachFood.size < 5 && this.count < 6) {
      this.count += 1;
      return this.setMenu();
    };

    return this.nextMenu()
    
  };

  nextMenu() {
    this.count = 0;
    if (this.finalFood.length < this.coachNames.length) {
      this.finalFood.push(Array.from(this.eachFood));
      this.eachFood = new Set();
      return this.setMenu();
    }
    
    
    return this.resultPrint();
  }

  resultPrint() {
    for (let i = 0; i < 5; i++) {
      this.categoryAnswer.push(this.MenuSelect.chooseCategory(this.category[i]));
    };

    OutputView.printResult(this.categoryAnswer);

    for (let i = 0; i < this.coachNames.length; i++) {
      OutputView.printResultMenu(this.coachNames[i], this.finalFood[i])
    };
    OutputView.lastPrint()
  };
};

module.exports = MenuController;
