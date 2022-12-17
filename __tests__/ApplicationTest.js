const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((_, callback) => { callback(input); }),
    MissionUtils.Console.readLine,
  );
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

  rows.reduce(
    (acc, [firstNumber, numbers]) => (
      acc.mockReturnValueOnce([firstNumber, ...numbers.filter((number) => number !== firstNumber)])
    ),
    MissionUtils.Random.shuffle,
  );
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

const makeFalseShuffles = (menuIndexList) => {
  const shuffles = [];
  menuIndexList.forEach((value) => {
    shuffles.push([value, Array.from({ length: 9 }, (_, idx) => idx + 1)]);
  });
  return shuffles;
};

describe('점심 메뉴 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('전체 기능 테스트', () => {
    test('카테고리 메뉴 중복 없는 추천', () => {
      const logSpy = getLogSpy();

      mockRandoms([2, 5, 1, 3, 4]);
      mockQuestions(['구구,제임스', '김밥', '']);
      mockShuffles([
        // 구구
        ...makeFalseShuffles([2, 7, 1, 4, 2]),

        // 제임스
        ...makeFalseShuffles([9, 1, 5, 5, 4]),
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

    test('토미는 메뉴중복, 제임스는 안먹는거, 포코는 둘다', () => {
      const logSpy = getLogSpy();

      mockRandoms([2, 2, 1, 3, 4]);
      mockQuestions(['토미,제임스,포코', '우동,스시', '뇨끼,월남쌈', '마파두부,고추잡채']);
      mockShuffles([
        // 토미
        ...makeFalseShuffles([3, 3, 3, 3, 2, 3, 4, 1]),

        // 제임스
        ...makeFalseShuffles([4, 5, 5, 8, 8, 8, 8, 8, 4]),

        // 포코
        ...makeFalseShuffles([4, 4, 7, 7, 6, 9, 6, 9, 7, 3]),
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
            '[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]',
            '[ 토미 | 쌈밥 | 김치찌개 | 미소시루 | 짜장면 | 팟타이 ]',
            '[ 제임스 | 된장찌개 | 비빔밥 | 가츠동 | 토마토 달걀볶음 | 파인애플 볶음밥 ]',
            '[ 포코 | 된장찌개 | 불고기 | 하이라이스 | 탕수육 | 나시고렝 ]',
            '추천을 완료했습니다.',
          ].join(''),
        ),
      );
    });
  });

  describe('예외 테스트', () => {
    test.each([
      ['구구 제임스'],
      ['구구'],
      ['구구,제임스,제임,임스,김규'],
    ])('코치 이름 입력 오류', (errorName) => {
      const logSpy = getLogSpy();
      mockRandoms([2, 5, 1, 3, 4]);
      mockQuestions([errorName, '구구,제임스', '김밥', '']);
      mockShuffles([
        // 구구
        ...makeFalseShuffles([2, 7, 1, 4, 2]),

        // 제임스
        ...makeFalseShuffles([9, 1, 5, 5, 4]),
      ]);

      const app = new App();
      app.play();
      const log = getOutput(logSpy);

      expectLogContains(log, ['[ERROR]']);
    });
  });
});
