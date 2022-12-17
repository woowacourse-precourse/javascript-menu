# 미션 - 💵 로또 게임

## 기능목록

* 카테고리
임의로 카테고리의 순서 또는 데이터를 변경하면 안 된다.
Randoms.pickNumberInRange()의 결과가 1이면 일식, 2면 한식, 3이면 중식, 4면 아시안, 5면 양식을 추천해야 한다.
추천할 수 없는 카테고리인 경우 다시 Randoms.pickNumberInRange()를 통해 임의의 값을 생성해서 추천할 카테고리를 정해야 한다.


### 기능목록 1 유저에게 코치 이름 입력받는다.
* [Mission Utils Library](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)를 사용해서 ,로 구분지어 이름들을 입력받는다.(코치수 2~5),(코치이름길이 2~4)
* 입력한 코치들에 대해 각각 못먹는 메뉴를 입력받는다.(0~2)

### 기능목록 2 위에서 받은 데이터로 음식을 추천해준다.
* 플레이어에게 [Mission Utils Library](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)를 이용해 메뉴 추천을 출력해준다.
* [ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]
[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]
[ 토미 | 쌈밥 | 김치찌개 | 미소시루 | 짜장면 | 팟타이 ]
[ 제임스 | 된장찌개 | 비빔밥 | 가츠동 | 토마토 달걀볶음 | 파인애플 볶음밥 ]
[ 포코 | 된장찌개 | 불고기 | 하이라이스 | 탕수육 | 나시고렝 ]
* 한 주에 같은 카테고리는 최대 2회까지만 고를 수 있다.
* 각 코치에게 한 주에 중복되지 않는 메뉴를 추천해야 한다.
* 추천 완료를 출력한다.
