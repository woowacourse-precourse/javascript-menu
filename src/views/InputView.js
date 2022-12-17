/* eslint-disable class-methods-use-this */
const { Console } = require('@woowacourse/mission-utils');
const Coach = require('../domains/Coach');

class InputView {
  /**
   * @param {string} query
   * @param {function(string): void} callback
   */
  read(query, callback) {
    Console.readLine(`${query}\n`, (text) => callback(text));
  }

  /**
   * @param {string} message
   */
  print(message) {
    Console.print(message);
  }

  readCoachNames(callback) {
    this.read('코치의 이름을 입력해 주세요. (, 로 구분)', (text) => {
      callback(text.split(',').map((coachName) => coachName.trim()));
    });
  }

  /**
   * @param {Coach} coach
   * @param {function(string): void} callback
   */
  readDislikeMenuNames(coach, callback) {
    this.read(`${coach.getName()}(이)가 못 먹는 메뉴를 입력해 주세요.`, (text) => {
      callback(text.split(',').map((dislikeMenuName) => dislikeMenuName.trim()));
    });
  }

  close() {
    Console.close();
  }
}

module.exports = InputView;
