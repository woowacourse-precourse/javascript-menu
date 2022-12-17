const { Console } = require('@woowacourse/mission-utils');
const { createTestScheduler } = require('jest');
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
        this.reRead(errorMessage, this.readCoaches.bind(this), readingHandler);
      }
    });
  },

  readCannotEat(readingHandler) {
    Console.readLine(MESSAGES.coaches, (input) => {
      const menuList = this.preProcessList(input);
      try {
        InputValidator.checkMenus(menuList);
        readingHandler(menuList);
      } catch (error) {
        this.reRead(errorMessage, this.readCannotEat.bind(this), readingHandler);
      }
    });
  },

  reRead(errorMessage, read, readingHandler) {
    Console.print(errorMessage);
    read(readingHandler);
  },

  preProcessList(input) {
    return input.replace(/ /g, '').split(',');
  },
});

module.exports = InputView;
