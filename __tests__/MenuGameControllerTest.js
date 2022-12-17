const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((_, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const mockShuffles = rows => {
  MissionUtils.Random.shuffle = jest.fn();

  rows.reduce(
    (acc, [firstNumber, numbers]) =>
      acc.mockReturnValueOnce([firstNumber, ...numbers.filter(number => number !== firstNumber)]),
    MissionUtils.Random.shuffle,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  return logSpy;
};

const getOutput = logSpy => [...logSpy.mock.calls].join('');

// const expectLogContains = (received, logs) => {
//   logs.forEach(log => {
//     expect(received).toEqual(expect.stringContaining(log));
//   });
// };

describe('컨트롤러 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('전체 기능 테스트', () => {
    test('랜덤값 중복 테스트', () => {
      const logSpy = getLogSpy();

      mockRandoms([1, 2, 2, 2, 3, 1]);
      mockQuestions(['구구,제임스', '김밥', '떡볶이']);

      const sequenced = (_, idx) => idx + 1;
      mockShuffles([
        // 구구
        [1, Array.from({ length: 9 }, sequenced)],
        [1, Array.from({ length: 9 }, sequenced)],
        [2, Array.from({ length: 9 }, sequenced)],
        [2, Array.from({ length: 9 }, sequenced)],
        [3, Array.from({ length: 9 }, sequenced)],
        [8, Array.from({ length: 9 }, sequenced)],
        [4, Array.from({ length: 9 }, sequenced)],

        // 제임스
        [9, Array.from({ length: 9 }, sequenced)],
        [9, Array.from({ length: 9 }, sequenced)],
        [9, Array.from({ length: 9 }, sequenced)],
        [1, Array.from({ length: 9 }, sequenced)],
        [2, Array.from({ length: 9 }, sequenced)],
        [3, Array.from({ length: 9 }, sequenced)],
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
            '[ 카테고리 | 일식 | 한식 | 한식 | 중식 | 일식 ]',
            '[ 구구 | 규동 | 김치찌개 | 쌈밥 | 토마토 달걀볶음 | 스시 ]',
            '[ 제임스 | 오코노미야끼 | 제육볶음 | 김밥 | 볶음면 | 미소시루 ]',
            '추천을 완료했습니다.',
          ].join(''),
        ),
      );
    });
  });

  test('못 먹는 메뉴가 없는 테스트', () => {
    const logSpy = getLogSpy();

    mockRandoms([2, 5, 1, 3, 4]);
    mockQuestions(['구구,제임스', '', '']);

    const sequenced = (_, idx) => idx + 1;
    mockShuffles([
      // 구구
      [2, Array.from({ length: 9 }, sequenced)],
      [7, Array.from({ length: 9 }, sequenced)],
      [1, Array.from({ length: 9 }, sequenced)],
      [4, Array.from({ length: 9 }, sequenced)],
      [2, Array.from({ length: 9 }, sequenced)],

      // 제임스
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
          '[ 카테고리 | 한식 | 양식 | 일식 | 중식 | 아시안 ]',
          '[ 구구 | 김치찌개 | 스파게티 | 규동 | 짜장면 | 카오 팟 ]',
          '[ 제임스 | 제육볶음 | 라자냐 | 가츠동 | 짬뽕 | 파인애플 볶음밥 ]',
          '추천을 완료했습니다.',
        ].join(''),
      ),
    );
  });
});
