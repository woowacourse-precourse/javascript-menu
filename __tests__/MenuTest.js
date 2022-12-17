const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
	MissionUtils.Console.readLine = jest.fn();
	answers.reduce((acc, input) => {
		return acc.mockImplementationOnce((_, callback) => {
			callback(input);
		});
	}, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickNumberInRange);
};

const mockShuffles = (rows) => {
	MissionUtils.Random.shuffle = jest.fn();

	rows.reduce((acc, [firstNumber, numbers]) => {
		return acc.mockReturnValueOnce([
			firstNumber,
			...numbers.filter((number) => number !== firstNumber),
		]);
	}, MissionUtils.Random.shuffle);
};

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, 'print');
	return logSpy;
};

const getOutput = (logSpy) => {
	return [...logSpy.mock.calls].join('');
};

const expectLogContains = (received, logs) => {
	logs.forEach((log) => {
		expect(received).toEqual(expect.stringContaining(log));
	});
};

describe('에러처리 테스트', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('코치 이름 에러처리', () => {
		test('2명 미만의 코치 입력', () => {
			const logSpy = getLogSpy();
			mockQuestions(['구구']);

			const app = new App();
			app.play();

			const log = getOutput(logSpy);
            expectLogContains(log, ["[ERROR]"]);
		});
        test('5명 초과의 코치 입력', () => {
			const logSpy = getLogSpy();
			mockQuestions(['구구','누누','두두','루루','무무','부부']);

			const app = new App();
			app.play();

			const log = getOutput(logSpy);
            expectLogContains(log, ["[ERROR]"]);
		});
        test('중복된 코치이름 입력', () => {
			const logSpy = getLogSpy();
			mockQuestions(['구구','구구']);

			const app = new App();
			app.play();

			const log = getOutput(logSpy);
            expectLogContains(log, ["[ERROR]"]);
		});
        test('싫어하는 음식 2개 초과입력', () => {
			const logSpy = getLogSpy();
			mockQuestions(['구구,제임스','김밥,규동,우동']);

			const app = new App();
			app.play();

			const log = getOutput(logSpy);
            expectLogContains(log, ["[ERROR]"]);
		});
	});
});
