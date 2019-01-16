/*
https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다.

어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다.
위키백과에 따르면, H-Index는 다음과 같이 구합니다.
어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고
나머지 논문이 h번 이하 인용되었다면 h가 이 과학자의 H-Index입니다.
어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때,
이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

[제한사항]
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

*/

function solution(dataArr) {
  let hIndex = 0;

  dataArr
    .sort((a, b) => b - a) // 논문을 인용수가 큰 순서로 정렬하고
    .forEach((refNum, idx) => {
      // 앞서 h-index가 기록되었다면 더 작은 인용수는 고려 안함
      if (hIndex > idx + 1) return;
      // h번째로 큰 논문이 h회 이상 인용되었다면 h-index 기록
      if (refNum >= idx + 1) hIndex = idx + 1;
    });

  return hIndex;
}

// ====== 테스트 코드 ======
const testModule = require('./Programmers_testing_template');

const tester = testModule.fn_test;
const TestScenario = testModule.Class_TestScenario;

let testCase = [3, 0, 6, 1, 5];
let expected = 3;
tester(
  `테스트 1 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
testCase = [0, 0, 0, 1];
expected = 1;
tester(
  `테스트 2 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
testCase = [0, 0, 0];
expected = 0;
tester(
  `테스트 3 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
testCase = [0];
expected = 0;
tester(
  `테스트 4 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [3, 3];
expected = 2;
tester(
  `테스트 4 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [4, 5, 6];
expected = 3;
tester(
  `테스트 4 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [1000];
expected = 1;
tester(
  `테스트 4 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [1, 1, 4, 4, 5, 5];
expected = 4;
tester(
  `테스트 4 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [1, 1, 4, 4, 10000, 10000];
expected = 4;
tester(
  `테스트 4 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [4, 4, 4, 4, 5, 5, 5, 5, 5];
expected = 5;
tester(
  `테스트 4 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
