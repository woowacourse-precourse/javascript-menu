/* eslint-disable class-methods-use-this */
const { Console } = require('@woowacourse/mission-utils');
const Menu = require('../domains/Menu');
const Coach = require('../domains/Coach');
const AppError = require('../errors/AppError');

class InputView {
  /**
   * @param {function(string): void} callback
   */
  read(callback) {
    Console.readLine('', (text) => callback(text));
  }

  /**
   * @param {string} message
   */
  print(message) {
    Console.print(message);
  }

  readCoaches(callback) {
    this.print('코치의 이름을 입력해 주세요. (, 로 구분)');
    this.read((text) => {
      callback(text.split(',').map((coachName) => new Coach(coachName.trim())));
    });
  }

  /**
   * @param {Coach} coach
   * @param {Menu[]} sourceMenus
   * @param {function(string): void} callback
   */
  readDislikeMenus(coach, sourceMenus, callback) {
    this.print(`${coach.getName()}(이)가 못 먹는 메뉴를 입력해 주세요.`);
    this.read((text) => {
      const menus = text
        .split(',')
        .map((menuName) => sourceMenus.find((menu) => menu.getName() === menuName.trim()) ?? null);
      if (menus.some((menu) => menu === null)) {
        throw new AppError('존재하지 않는 메뉴를 입력하였습니다.');
      }
      if (menus.length > 2) {
        throw new AppError('못 먹는 메뉴는 최소 0개, 최대 2개까지 입력할 수 있습니다.');
      }
      callback(menus);
    });
  }
}

module.exports = InputView;
