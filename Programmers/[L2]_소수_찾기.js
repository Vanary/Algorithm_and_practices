/*
https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

[L2]_소수_찾기.js

[문제 설명]

한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 
종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

[제한사항]

numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

[풀이 후기]
어떻게 경우의 수를 탐색할까 고민하다가, 주어진 노드의 갯수가 최대 7개라서 그냥 O(N!)으로 풀었습니다.
(7! = 5,040)

소수 판정 부분에서 부동소수점 문제 때문인지 반환값이 더 나오는 경우가 있어서,
정수로 자리내림을 한번 해 주어야 했습니다. 다음에 비슷한 논리를 짤 일이 있으면 기억해둬야겠습니다.

*/

function solution(numStr) {
  const numArr = numStr.split("");
  const allNums = new Set();

  // 경우의 수 다 뽑는 재귀 함수
  function createPossiblity(num, otherNumsArr) {
    if (!otherNumsArr[0]) return;

    otherNumsArr.forEach((nextNum, idx) => {
      allNums.add(num + nextNum);
      createPossiblity(num + nextNum, [
        ...otherNumsArr.slice(0, idx),
        ...otherNumsArr.slice(idx + 1)
      ]);
    });
  }
  // 소수 판정 함수
  function isPrime(numText) {
    const num = parseInt(numText, 10);
    const limit = Math.round(Math.sqrt(num)) + 1;

    if ((num === 1) | (num === 0)) return false;

    for (let i = 2; i < limit; i++) {
      if (!(num % i)) return false;
    }

    return true;
  }

  //최초 한 자리 수 경우들 저장 및 재귀 호출 시작
  numArr.forEach((num, idx) => {
    if (num === "0") return; // 첫 자리가 0인 경우는 다룰 필요 없음
    allNums.add(num);
    createPossiblity(num, [...numArr.slice(0, idx), ...numArr.slice(idx + 1)]);
  });

  // 각 경우의 수를 소수찾기 알고리즘으로 filter하고 남은 갯수 반환
  return [...allNums].filter(num => isPrime(parseInt(num, 10))).length;
}

expected = 3;
args = ["17"];
console.log(
  `입력값 ${args}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...args
  )}`
);

expected = 0;
args = ["9999999"];
console.log(
  `입력값 ${args}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...args
  )}`
);
