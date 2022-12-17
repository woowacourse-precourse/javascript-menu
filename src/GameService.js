const GameRepo = require('./GameRepo');
const { MODEL_KEY } = require('./utils/constants');

// 파일명 확인하고 변경하기
class GameService {
  #repo;

  constructor() {
    this.#repo = new GameRepo();
  }
}

module.exports = GameService;
