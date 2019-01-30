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

[풀이 후기]
50 C 3을 뽑는 문제라 계산이 필요한 횟수는 50*49*48 = 117,600. 마음 편히 O(N^3) 알고리즘으로 풀었습니다.
*/

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num !== 1 && num !== 0;
};

const solution = (nums) => {
  let result = 0;
  const len = nums.length;

  for (let first = 0; first < len - 2; first += 1) {
    for (let second = first + 1; second < len - 1; second += 1) {
      for (let third = second + 1; third < len; third += 1) {
        if (isPrime(nums[first] + nums[second] + nums[third])) result += 1;
      }
    }
  }

  return result;
};

// ====== 테스트 코드 ======

const expected = 1;
const args = [[1, 2, 3, 4]];
console.log(
  `입력값 ${args}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...args,
  )}`,
);
