const GameRepo = require('./GameRepo');
const { MODEL_KEY } = require('./utils/constants');

const SAMPLE = {
  일식: [
    '규동',
    '우동',
    '미소시루',
    '스시',
    '가츠동',
    '오니기리',
    '하이라이스',
    '라멘',
    '오코노미야끼',
  ],
  한식: [
    '김밥',
    '김치찌개',
    '쌈밥',
    '된장찌개',
    '비빔밥',
    '칼국수',
    '불고기',
    '떡볶이',
    '제육볶음',
  ],
  중식: [
    '깐풍기',
    '볶음면',
    '동파육',
    '짜장면',
    '짬뽕',
    '마파두부',
    '탕수육',
    '토마토 달걀볶음',
    '고추잡채',
  ],
  아시안: [
    '팟타이',
    '카오 팟',
    '나시고렝',
    '파인애플 볶음밥',
    '쌀국수',
    '똠얌꿍',
    '반미',
    '월남쌈',
    '분짜',
  ],
  양식: [
    '라자냐',
    '그라탱',
    '뇨끼',
    '끼슈',
    '프렌치 토스트',
    '바게트',
    '스파게티',
    '피자',
    '파니니',
  ],
};

// 파일명 확인하고 변경하기
class GameService {
  #repo;

  constructor() {
    this.#repo = new GameRepo();
  }

  static makeCoachData(input) {
    const inputList = input.split(',');
    return inputList.reduce((acc, coach) => {
      return { ...acc, [coach]: [] };
    }, {});
  }

  inputCoach(input) {
    this.#repo.update(MODEL_KEY.coach, GameService.makeCoachData(input));
  }

  static removeFood(target, sample) {
    Object.values(sample).forEach((foods) => {
      if (foods.includes(target)) {
        foods.splice(foods.indexOf(target), 1, null);
      }
    });
  }

  #removeCoachFoodFor(coach, foodList) {
    const oldData = this.#repo.read(MODEL_KEY.daily) || {};
    const copySample = { ...SAMPLE };

    foodList.forEach((target) => {
      GameService.removeFood(target, copySample);
    });

    this.#repo.update(MODEL_KEY.daily, { ...oldData, [coach]: copySample });
  }

  remove() {
    const coachData = this.#repo.read(MODEL_KEY.coach);
    Object.entries(coachData).forEach(([coach, foodList]) => {
      this.#removeCoachFoodFor(coach, foodList);
    });
  }

  outputCoach() {
    return this.#repo.read(MODEL_KEY.coach);
  }

  #inputNotingNotEat(inputList, coach) {
    const coachRepo = this.#repo.read(MODEL_KEY.coach);

    if (inputList[0] === '') {
      this.#repo.update(MODEL_KEY.coach, { ...coachRepo, [coach]: ['낫싱'] });
    }

    return this;
  }

  #inputNotEatFor(inputList, coach) {
    const coachRepo = this.#repo.read(MODEL_KEY.coach);

    if (inputList[0] !== '') {
      this.#repo.update(MODEL_KEY.coach, { ...coachRepo, [coach]: inputList });
    }
  }

  // -- 못먹는 음식 입력
  inputNotEat(input, coach) {
    const inputList = input.split(',');
    this.#inputNotingNotEat(inputList).#inputNotEatFor(inputList, coach);
  }
}

module.exports = GameService;
