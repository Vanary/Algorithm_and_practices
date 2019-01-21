/*
https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

[L2]_소수_찾기.js

[문제 설명]

한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

[제한사항]

numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

*/

function solution(numStr) {
  const numArr = numStr.split('');
  // numArr로 숫자 사용 경우의 수 다 뽑고
  // 각 경우의 수에 소수찾기 알고리즘 적용 (filter)
  // return 걸러진 경우의 수 갯수
}

// ====== 테스트 코드 ======
const testModule = require('./Programmers_testing_template');

const tester = testModule.fn_test;
const TestScenario = testModule.Class_TestScenario;

testCase = ['17'];
expected = 3;
tester(
  `테스트 - ${[...testCase]} should return ${expected}`,
  new TestScenario({
    givenArr: [...testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult.toString() === actualResult.toString(),
  }),
);
testCase = ['011'];
expected = 2;
tester(
  `테스트 - ${[...testCase]} should return ${expected}`,
  new TestScenario({
    givenArr: [...testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult.toString() === actualResult.toString(),
  }),
);
