/*
https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

[문제 설명]

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때,
순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

[제한 사항]
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.


[풀이 후기]
두 가지 주의사항이 있었습니다.
- O(N^2)로 구현하면 시간 초과가 나서, 루프 속 루프를 꺼내서 루프 한 번, 그 다음에 자료를 가지고 정렬을 수행하는 방식으로 O(NlogN) 복잡도로 개선해야 했습니다.
- 모든 입력값이 0인 케이스를 고려해야 했습니다.
*/

function solution(numbersArr) {
  const nums = [];
  for (let i = 0; i < 10; i += 1) {
    nums.push([]);
  }

  numbersArr.forEach((num) => {
    const numStr = num.toString();
    const numGroup = nums[numStr[0]];

    numGroup.push(numStr);
  });

  function sortFn(numStr1, numStr2) {
    const firstFirst = parseInt(`${numStr1}${numStr2}`, 10);
    const firstLast = parseInt(`${numStr2}${numStr1}`, 10);

    return firstFirst >= firstLast ? -1 : 1;
  }

  const result = nums
    .map(numGroup => numGroup.sort(sortFn))
    .reduce((acc, numGroup) => `${numGroup.join('')}${acc}`, '');

  return result[0] === '0' ? '0' : result;
}

// ====== 테스트 코드 ======
const testModule = require('./Programmers_testing_template');

const tester = testModule.fn_test;
const TestScenario = testModule.Class_TestScenario;

let testCase = [6, 10, 2];
let expected = '6210';
tester(
  `테스트 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
testCase = [3, 30, 34];
expected = '34330';
tester(
  `테스트 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
testCase = [3, 30, 34, 5, 9];
expected = '9534330';
tester(
  `테스트 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [621, 62, 627];
expected = '62762621';
tester(
  `테스트 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
testCase = [621, 6, 627];
expected = '6627621';
tester(
  `테스트 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);

testCase = [0, 0, 24, 5, 69, 702];
expected = '7026952400';
tester(
  `테스트 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
testCase = [0, 0, 0];
expected = '0';
tester(
  `테스트 - ${testCase} should return ${expected}`,
  new TestScenario({
    givenArr: [testCase],
    whenFn: solution,
    thenVal: expected,
    assertionFn: (expectedResult, actualResult) => expectedResult === actualResult,
  }),
);
