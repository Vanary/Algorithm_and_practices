/*
https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

[L2]_소수_만들기.js

[문제 설명]

주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.

숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중
서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

[제한사항]
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

const solution = (nums) => {};

// ====== 테스트 코드 ======

// const expected = [3, 3];
// const args = [3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']];
// console.log(
//   `입력값 ${args}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
//     ...args,
//   )}`,
// );

const testModule = require('./Programmers_testing_template');

const tester = testModule.fn_test;
const TestScenario = testModule.Class_TestScenario;

testCase = [[1, 2, 3, 4]];
expected = 1;
tester(
  `테스트 - ${[...testCase]} should return ${expected}`,
  new TestScenario({
    givenArr: [...testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [[1, 2, 7, 6, 4]];
expected = 4;
tester(
  `테스트 - ${[...testCase]} should return ${expected}`,
  new TestScenario({
    givenArr: [...testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
