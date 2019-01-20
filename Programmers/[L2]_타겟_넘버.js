/*
https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

[L2]_타겟_넘버.js

[문제 설명]

n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

[제한사항]
주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
각 숫자는 1 이상 50 이하인 자연수입니다.
타겟 넘버는 1 이상 1000 이하인 자연수입니다.

[풀이 후기]
전에 비슷한 문제를 풀어봐서 쉽게 해결함.
주어지는 숫자의 개수(N)가 20개 이하이기 때문에, O(N^2) 복잡도로 풀어도 최대 메모리는 2^20 = 1Mb라서 암묵적 제한을 넘기지 않습니다.
너비 우선 탐색으로 모든 트리를 탐색 = 경우의 수를 모두 저장해서 해결했습니다.
*/

function solution(numbers, target) {
  const allCases = numbers.reduce(
    (acc, num) => {
      const nextCases = [];
      acc.forEach(prevCase => nextCases.push(prevCase + num, prevCase - num));
      return nextCases;
    },
    [0],
  );

  return allCases.filter(finalNum => finalNum === target).length;
}

const args = [[1, 1, 1, 1, 1], 3];
console.log(
  `입력값 ${args}에 대한 solution의 답은 5이어야 합니다. - 실제 반환값 : ${solution(...args)}`,
);
