const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((_, callback) => {
    callback(input);
  }), MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const mockShuffles = (rows) => {
  MissionUtils.Random.shuffle = jest.fn();

  rows.reduce((acc, [firstNumber, numbers]) => acc.mockReturnValueOnce([
    firstNumber,
    ...numbers.filter((number) => number !== firstNumber),
  ]), MissionUtils.Random.shuffle);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const runException = (inputs) => {
  const readLine = mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);

  return readLine;
};

describe('유저 입력 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('코치 이름 입력이 , 로 구분되어 있지 않으면 오류가 발생한다', () => {
    runException(['1']);
  });

  test('코치가 2명 이상 5명 이하가 아닌 경우 오류가 발생한다', () => {
    runException(['sy']);
  });

  test('코치의 이름이 2글자 이상 4글자 이하가 아닌 경우 오류가 발생한다', () => {
    runException(['sysy,seyeon']);
  });
});
