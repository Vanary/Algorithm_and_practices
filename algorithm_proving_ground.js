/*
https://programmers.co.kr/learn/courses/30/lessons/12927?language=javascript

[L3]_야근_지수.js

[문제 설명]
회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다.
야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다.

Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.
Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때,
퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.

[제한 사항]
works는 길이 1 이상, 20,000 이하인 배열입니다.
works의 원소는 50000 이하인 자연수입니다.
n은 1,000,000 이하인 자연수입니다.

*/

function solution(n, works) {
  const answer = 0;
  return answer;
}

// ====== 테스트 코드 ======

// const testCase = [3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']];
// const expected = [3, 3];
// console.log(
//   `입력값 ${JSON.stringify(testCase)}에 대한 solution의 답은 ${JSON.stringify(expected)}이어야 합니다. - 실제 반환값 : ${solution(
//     ...testCase,
//   )}`,
// );

const testModule = require('./Programmers_testing_template');

const tester = testModule.fn_test;
const TestScenario = testModule.Class_TestScenario;

testCase = [4, [4, 3, 3]];
expected = 12;
tester(
  `테스트 - ${JSON.stringify(testCase)} should return ${JSON.stringify(expected)}`,
  new TestScenario({
    givenArr: [...testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [1, [2, 1, 2]];
expected = 6;
tester(
  `테스트 - ${JSON.stringify(testCase)} should return ${JSON.stringify(expected)}`,
  new TestScenario({
    givenArr: [...testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [3, [1, 1]];
expected = 0;
tester(
  `테스트 - ${JSON.stringify(testCase)} should return ${JSON.stringify(expected)}`,
  new TestScenario({
    givenArr: [...testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
