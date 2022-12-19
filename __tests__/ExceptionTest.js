const ExceptionController = require('../src/Controllers/ExceptionController');

describe('사용자 입력 에러 테스트', () => {

    test.each([['가가'], ['가가', '나나', '다다', '라라', '마마', '바바'], ['가', '나'], ['가', '나나', '다다']])('사용자가 잘못된 코치 입력값을 입력한 경우 테스트', (coachList) => {
        const result = ExceptionController.isInValidCoach(coachList);
        expect(result).toBeTruthy();
    });

    
});