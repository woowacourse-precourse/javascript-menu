const MissionUtils = require('@woowacourse/mission-utils');
const { SAMPLE } = require('../utils/constants');
const { readBannedFoods } = require('../views/InputView');

class Coach {
  #name;

  #bannedFoods = [];

  #foods = [];

  constructor(name) {
    // console.log(`${name} 코치 생성!`);
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getBannedFoods() {
    return this.#bannedFoods;
  }

  getFoods() {
    return this.#foods;
  }

  makeBannedFoods() {
    return new Promise((resolve) => {
      resolve(readBannedFoods(this.#name, this.setBannedFoods.bind(this)));
    });
  }

  setBannedFoods(food) {
    this.#bannedFoods = food.split(',');
  }

  // eslint-disable-next-line max-lines-per-function
  recommendFoods(categories) {
    // eslint-disable-next-line max-lines-per-function
    categories.forEach((element) => {
      const foods = SAMPLE[element].split(', ');
      const arr = [];
      for (let i = 0; i < foods.length; i += 1) {
        arr.push(i);
      }
      const temp = MissionUtils.Random.shuffle(arr);
      let index = 0;
      let menu = foods[temp[index]];
      if (this.#bannedFoods.includes(menu)) {
        while (!this.#bannedFoods.includes(menu)) {
          menu = foods[temp[index++]];
        }
        this.#foods.push(menu);
      } else {
        this.#foods.push(menu);
      }
    });
  }
}
module.exports = { Coach };
