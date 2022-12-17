## 기능 목록

### 핵심

- [x] 1 ~ 5 사이의 임의의 숫자를 생성한다. - Generator#generateRandomNumberBetween1And5()
- [x] 1 ~ 5 각 숫자를 해당 카테고리로 변환한다. - Converter#convertNumberToCategory()
- [x] 입력(코치, 음식)을 구분자(,)로 구분해 문자열 배열로 변환한다. - Converter#convertToStringArray()

### 입출력 관련

#### 입력

- [x] 코치 이름 입력 메세지를 출력하고 입력받는다. - InputView#readCoachNames()
- [x] 각 코치별 못먹는 음식 메세지를 출력하고 입력받는다. - InputView#readFoodNames()

#### 출력

- [ ] 메뉴 추천 시작 메세지를 출력한다. - OutputView#printResultTitle()
- [ ] 추천 결과 메세지를 출력한다. - OuputView#printRecommendResult()
  - [ ] 타이틀 - OutputView#printRecommendResultTitle()
  - [ ] 결과 표 - OuputView#printRecommendResultTable()
    - [ ] 제목 - OuputView#printRecommendResultTableHead()
    - [ ] 카테고리 - OuputView#printRecommendResultTableCategory()
    - [ ] 코치별 추천 메뉴 - OuputView#printRecommendResultTableCoachRow()
  - [ ] 완료 - OutputView#printResultComplete()

## 예외 처리 목록

- [ ] 코치 이름 길이를 2보다 작거나 4보다 크게 입력한다. - Validator#validateCoachNameLength()
- [ ] 코치 이름을 2개보다 작거나 5보다 크게 입력한다. - Validator#validateCoachNameCount()
- [ ] 각 코치별 못먹는 음식을 3개 이상 입력한다. - Validator#validateFoodNameCount()
