const OutputUI = require('./view/OutputUI');
const InputUI = require('./view/InputUI');
const Vaildator = require('./util/vaildator');
const Coach = require('./Coach');
const InputProcessor = require('./util/InputProcessor');

class App {
  constructor() {
    this.output = new OutputUI();
    this.input = new InputUI();
    this.coachs = [];
  }
  play() {
    this.output.print('점심 메뉴 추천을 시작합니다.');
    this.input.readCoachNames(this.inputCoachs.bind(this));
  }

  inputCoachs(input) {
    const coachNames = InputProcessor.parseCommaStringsToArray(input);

    if (!coachNames.every(Vaildator.isVaildNameLength)) {
      // 에러 처리
    }

    if (!Vaildator.isVaildCoachNumber(coachNames)) {
      // 에러 처리
    }

    coachNames.forEach((coachname) => {
      this.coachs.push(new Coach(coachname));
    });
  }
}

module.exports = App;
