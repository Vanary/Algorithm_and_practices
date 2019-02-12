/*
[L3]_2xN_타일링.js
https://programmers.co.kr/learn/courses/30/lessons/12900?language=javascript

[L3]_멀리 뛰기.js
https://programmers.co.kr/learn/courses/30/lessons/12914?language=javascript

[풀이후기]
다양한 문제를 접해보는 것의 장점은 비슷하거나 같은 문제를 다시 볼 가능성이 있다는 것 같습니다. (고마워요 호눅스!)

두 문제 모두 길이 n이 커지면서 n(1) = 1, n(2) = 2, n(3) = 3, n(4) = 5, n(5) = 8.... 로 나아가는 피보나치 수열을 찾는 문제입니다.

다만 '2xN 타일링' 문제처럼, n이 60,000이나 되면 메모이제이션으로 풀었을 때 스택 오버플로우가 발생합니다.

생각을 뒤집어 우직하게 한 계단씩 계산해 나간다는 생각을 하는 게 가장 어려운 문제였습니다.
*/

function solution(n) {
  let answer = 1;
  let prevAnswer = 0;
  for (let i = 1; i <= n; i++) {
    const temp = answer;
    answer = (temp + prevAnswer) % 1000000007;
    prevAnswer = temp;
  }

  return answer % 1000000007;
}

// ====== 테스트 코드 ======

const testCase = [4];
const expected = 5;
console.log(
  `입력값 ${JSON.stringify(testCase)}에 대한 solution의 답은 ${JSON.stringify(
    expected,
  )}이어야 합니다. - 실제 반환값 : ${solution(...testCase)}`,
);
