const Coach = require('../src/domain/Coach');

beforeEach(() => {
  coach = new Coach();
  coach.setName('구구,제임스');
  coach.setHateFood('구구', '김밥');
  coach.setHateFood('제임스', '떡볶이');
});

describe('Coach 클래스의 getNames() 메서드 테스트', () => {
  test('초기 설정된 코치님들의 이름이 배열로 반환되는지 확인', () => {
    const coachsNameArray = coach.getNames();
    console.log(coachsNameArray);
    expect(coachsNameArray).toEqual(['구구', '제임스']);
  });
  test.failing('초기 설정된 코치님들의 이름을 잘못된 값으로 설정했을때 실패 테스트', () => {
    const coachsNameArray = coach.getNames();
    expect(coachsNameArray).toEqual(['구구', '제임스a']);
  });
});

describe('Coach 클래스의 getHateFood() 메서드 테스트', () => {
  test('싫어하는 음식이 배열로 반환되는지 확인', () => {
    const coachHateFoodArray = coach.getHateFood('구구');
    expect(coachHateFoodArray).toEqual(['김밥']);
  });
  test.failing('배열로 반환되지 않았을때 실패하는지 확인', () => {
    const coachHateFoodArray = coach.getHateFood('구구');
    expect(coachHateFoodArray).toEqual(['떡볶이']);
  });
});
