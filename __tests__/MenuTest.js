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

	describe('에러처리 테스트', () => {
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
		test('한 글자 코치 이름 입력', () => {
			const logSpy = getLogSpy();
			mockQuestions(['구','누누']);

			const app = new App();
			app.play();

			const log = getOutput(logSpy);
            expectLogContains(log, ["[ERROR]"]);
		});
		test('다섯 글자 코치 이름 입력', () => {
			const logSpy = getLogSpy();
			mockQuestions(['구구구구군','누누']);

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

    describe('전체 기능 테스트', () => {
		test('카테고리 메뉴 중복 있는 추천', () => {
			const logSpy = getLogSpy();

			mockRandoms([2, 5, 2, 3, 4]);
			mockQuestions(['구구,제임스', '김밥', '떡볶이']);

			const sequenced = (_, idx) => idx + 1;
			mockShuffles([
				// 구구
				[2, Array.from({ length: 9 }, sequenced)],
				[7, Array.from({ length: 9 }, sequenced)],
				[3, Array.from({ length: 9 }, sequenced)],
				[4, Array.from({ length: 9 }, sequenced)],
				[2, Array.from({ length: 9 }, sequenced)],

				//제임스
				[9, Array.from({ length: 9 }, sequenced)],
				[1, Array.from({ length: 9 }, sequenced)],
				[5, Array.from({ length: 9 }, sequenced)],
				[5, Array.from({ length: 9 }, sequenced)],
				[4, Array.from({ length: 9 }, sequenced)],
			]);

			const app = new App();
			app.play();
			const log = getOutput(logSpy);

			expect(log.replace(/\n/g, '')).toEqual(
				expect.stringContaining(
					[
						'점심 메뉴 추천을 시작합니다.',
						'메뉴 추천 결과입니다.',
						'[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
						'[ 카테고리 | 한식 | 양식 | 한식 | 중식 | 아시안 ]',
						'[ 구구 | 김치찌개 | 스파게티 | 쌈밥 | 짜장면 | 카오 팟 ]',
						'[ 제임스 | 제육볶음 | 라자냐 | 비빔밥 | 짬뽕 | 파인애플 볶음밥 ]',
						'추천을 완료했습니다.',
					].join(''),
				),
			);
		});
		test('싫어하는 메뉴가 없는 추천', () => {
			const logSpy = getLogSpy();

			mockRandoms([2, 5, 2, 3, 4]);
			mockQuestions(['구구,제임스', '', '']);

			const sequenced = (_, idx) => idx + 1;
			mockShuffles([
				// 구구
				[2, Array.from({ length: 9 }, sequenced)],
				[7, Array.from({ length: 9 }, sequenced)],
				[3, Array.from({ length: 9 }, sequenced)],
				[4, Array.from({ length: 9 }, sequenced)],
				[2, Array.from({ length: 9 }, sequenced)],

				//제임스
				[9, Array.from({ length: 9 }, sequenced)],
				[1, Array.from({ length: 9 }, sequenced)],
				[5, Array.from({ length: 9 }, sequenced)],
				[5, Array.from({ length: 9 }, sequenced)],
				[4, Array.from({ length: 9 }, sequenced)],
			]);

			const app = new App();
			app.play();
			const log = getOutput(logSpy);

			expect(log.replace(/\n/g, '')).toEqual(
				expect.stringContaining(
					[
						'점심 메뉴 추천을 시작합니다.',
						'메뉴 추천 결과입니다.',
						'[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
						'[ 카테고리 | 한식 | 양식 | 한식 | 중식 | 아시안 ]',
						'[ 구구 | 김치찌개 | 스파게티 | 쌈밥 | 짜장면 | 카오 팟 ]',
						'[ 제임스 | 제육볶음 | 라자냐 | 비빔밥 | 짬뽕 | 파인애플 볶음밥 ]',
						'추천을 완료했습니다.',
					].join(''),
				),
			);
		});
	});
});
