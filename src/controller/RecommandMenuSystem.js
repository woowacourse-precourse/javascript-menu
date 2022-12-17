const { OutputView } = require('../view/OutputView');

class RecommandMenuSystem {
  constructor(model) {
    this.recommandMenu = model;
  }

  start() {
    OutputView.printRecommandMenuStart();
  }
}

module.exports = RecommandMenuSystem;
