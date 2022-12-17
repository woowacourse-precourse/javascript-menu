const GameRepo = require('./GameRepo');
const { MODEL_KEY } = require('./utils/constants');

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
