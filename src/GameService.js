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
    console.log(GameService.makeCoachData(input));
    this.#repo.update(MODEL_KEY.coach, GameService.makeCoachData(input));
  }
}

module.exports = GameService;
