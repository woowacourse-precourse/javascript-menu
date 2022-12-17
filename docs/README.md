## 기능 목록

### 핵심

- [x] 1 ~ 5 사이의 임의의 숫자를 생성한다. - Generator#generateRandomNumberBetween1And5()
- [ ] 카테고리, 못먹는 음식을 입력 받아 새 음식 추천을 생성한다. - Generator#generateNewRecommendedFood()
- [x] 1 ~ 5 각 숫자를 해당 카테고리로 변환한다. - Converter#convertNumberToCategory()
- [x] 입력(코치, 음식)을 구분자(,)로 구분해 문자열 배열로 변환한다. - Converter#convertToStringArray()
- [ ] 카테고리가 이미 2번 선택되었는지 확인한다. - Checker#checkCategoryTwice()
- [ ] 이미 추천 받은 음식인지 확인한다. - Checker#checkDuplicateFood()

### 입출력 관련

#### 입력

- [x] 코치 이름 입력 메세지를 출력하고 입력받는다. - InputView#readCoachNames()
- [x] 각 코치별 못먹는 음식 메세지를 출력하고 입력받는다. - InputView#readFoodNames()

#### 출력

- [x] 메뉴 추천 시작 메세지를 출력한다. - OutputView#printStartMessage()
- [x] 추천 결과 메세지를 출력한다. - OuputView#printRecommendResult()
  - [x] 타이틀 - OutputView#printRecommendResultTitle()
  - [x] 결과 표 - OutputView#printRecommendResultTable()
    - [x] 제목 - OutputView#printRecommendResultTableRow()
    - [x] 행 출력 - OutputView#printRecommendResultTableRow()
  - [x] 완료 - OutputView#printResultComplete()

## 예외 처리 목록

- [x] 코치 이름 길이를 2보다 작거나 4보다 크게 입력한다. - Validator#validateCoachNameLength()
- [x] 코치 이름을 2개보다 작거나 5보다 크게 입력한다. - Validator#validateCoachNameCount()
- [x] 음식 목록에 없는 음식을 입력한다. - Validator#validateFoodName()
- [x] 각 코치별 못먹는 음식을 3개 이상 입력한다. - Validator#validateFoodNameCount()
