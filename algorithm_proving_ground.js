/*
https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

[L2]_구명보트.js

[문제 설명]
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.
문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다.

number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

[제한 조건]
number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.
*/

function solution(number, k) {
  const answer = '';
  return answer;
}

// ====== 테스트 코드 ======

// const expected = [3, 3];
// const testCase = [3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']];
// console.log(
//   `입력값 ${JSON.stringify(testCase)}에 대한 solution의 답은 ${JSON.stringify(expected)}이어야 합니다. - 실제 반환값 : ${solution(
//     ...testCase,
//   )}`,
// );

const testModule = require('./Programmers_testing_template');

const tester = testModule.fn_test;
const TestScenario = testModule.Class_TestScenario;

testCase = ['1924', 2];
expected = '94';
tester(
  `테스트 - ${JSON.stringify(testCase)} should return ${JSON.stringify(expected)}`,
  new TestScenario({
    givenArr: [...testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = ['1231234', 3];
expected = '3234';
tester(
  `테스트 - ${JSON.stringify(testCase)} should return ${JSON.stringify(expected)}`,
  new TestScenario({
    givenArr: [...testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = ['4177252841', 4];
expected = '775841';
tester(
  `테스트 - ${JSON.stringify(testCase)} should return ${JSON.stringify(expected)}`,
  new TestScenario({
    givenArr: [...testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
