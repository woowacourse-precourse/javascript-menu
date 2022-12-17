const MissionUtils = require('@woowacourse/mission-utils');
const { Coach } = require('./models/Coach');
const { findIndexByCoachName } = require('./utils/common');
const { SAMPLE, RESULT_MESSAGE } = require('./utils/constants');
const { readCoaches, readBannedFoods } = require('./views/InputView');
const { OutputView } = require('./views/OutputView');

class App {
  #coaches = [];

  #categories = [];

  play() {
    this.setCategories();
    OutputView.welcome();
    readCoaches(this.setCoaches.bind(this));
  }

  setCategories() {
    const numbers = [];
    while (numbers.length !== 5) {
      const pick = MissionUtils.Random.pickNumberInRange(1, 5);
      if (numbers.filter((number) => number === pick).length < 2) {
        numbers.push(pick);
      }
    }
    const category = Object.keys(SAMPLE);
    this.#categories = numbers.map((number) => category[number - 1]);
  }

  setCoaches(answer) {
    const coaches = answer.split(',');
    coaches.forEach((coach) => {
      this.#coaches.push(new Coach(coach));
    });
    readBannedFoods(
      this.setCoachesBannedFoods.bind(this),
      this.#coaches.map((c) => c.getName()),
      0,
      [],
    );
  }

  setCoachesBannedFoods(arr) {
    arr.forEach((el) => {
      this.#coaches[findIndexByCoachName(this.#coaches, el.name)].setBannedFoods(el.foods);
    });
    this.recommendFoodsToCoaches();
  }

  recommendFoodsToCoaches() {
    this.#coaches.forEach((coach) => {
      coach.recommendFoods(this.#categories);
    });
    this.printResults();
  }

  printResults() {
    MissionUtils.Console.print(RESULT_MESSAGE.result);
    MissionUtils.Console.print(RESULT_MESSAGE.day);
    const catLine = ['카테고리', ...this.#categories];
    MissionUtils.Console.print(`[ ${catLine.join(' | ')} ]`);
    const results = [];
    this.#coaches.forEach((coach) => {
      results.push([coach.getName(), ...coach.getFoods()]);
    });
    results.forEach((line) => MissionUtils.Console.print(`[ ${line.join(' | ')} ]`));
    MissionUtils.Console.print(RESULT_MESSAGE.bye);
  }
}

module.exports = App;
