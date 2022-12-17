const { CONDITION } = require("./Values");
const { ERROR } = require("./Messages");


class Validate {

  constructor() {
    this.userlist = [];
  }

  validateUserName(name) {
    this.userlist = name.split(',');
    this.throwUserName();
  }

  validateFood(food) {
   
  }

  throwUserName() {
    for(let index = 0; index < this.userlist.length; index++) {
      if(
        this.userlist[index].length < CONDITION.MIN_LENGHTH ||
        this.userlist[index].length > CONDITION.MAX_LENGHTH
        ) throw new Error(ERROR.INPUT_NAME);
    }
    if(
      this.userlist.length < CONDITION.MIN_CRUW ||
      this.userlist.length > CONDITION.MAX_CRUW
      ) throw new Error(ERROR.INPUT_MEMBERS);
  }
}

module.exports = Validate;