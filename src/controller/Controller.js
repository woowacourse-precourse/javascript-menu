const Coach = require('../model/Coach');
const { readCoachName, readInedibleMenu } = require('../view/InputView');
const { printStart } = require('../view/OutputView');

class Controller {
  #coach;

  start() {
    printStart();

    readCoachName(this.setCoachName.bind(this));
  }

  setCoachName(input) {
    this.#coach = new Coach();
    const coaches = this.#coach.setNames(input);
    this.startReadingInedibleMenu(coaches.map(({ name }) => name));
  }

  startReadingInedibleMenu(names) {
    const index = 0;
    const coachName = names[index];

    readInedibleMenu(this.setInedibleMenu.bind(this, names, index), coachName);
  }

  setInedibleMenu(names, index, input) {
    let coachName = names[index];
    const coaches = this.#coach.setInedibleMenu(input, coachName);

    if (index < names.length - 1) {
      coachName = names[index + 1];
      readInedibleMenu(this.setInedibleMenu.bind(this, names, index + 1), coachName);
      return;
    }

    this.recommend(coaches);
  }

  recommend(coaches) {}
}

module.exports = Controller;
