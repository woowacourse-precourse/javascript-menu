const { Console } = require('@woowacourse/mission-utils');
const InputValidator = require('./InputValidator');
const MESSAGES = require('./messages');

const InputView = Object.freeze({
  readCoaches(readingHandler) {
    Console.readLine(MESSAGES.coaches, (input) => {
      const coachList = this.preProcessList(input);
      try {
        InputValidator.checkCoaches(coachList);
        readingHandler(coachList);
      } catch (error) {
        this.reReadCoaches(error.message, this.readCoaches.bind(this), readingHandler);
      }
    });
  },

  readCannotEat(coach, readingHandler) {
    Console.readLine(`${coach.getName()}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (input) => {
      const menuList = this.preProcessList(input);
      try {
        InputValidator.checkMenus(menuList);
        readingHandler(menuList);
      } catch (error) {
        this.reReadCannotEat(error.message, this.readCannotEat.bind(this), coach, readingHandler);
      }
    });
  },

  reReadCoaches(errorMessage, read, readingHandler) {
    Console.print(errorMessage);
    read(readingHandler);
  },

  reReadCannotEat(errorMessage, read, coach, readingHandler) {
    Console.print(errorMessage);
    read(coach, readingHandler);
  },

  preProcessList(input) {
    return input.replace(/ /g, '').split(',');
  },
});

module.exports = InputView;
