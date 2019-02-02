/*
https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

[L2]_구명보트.js

[문제 설명]
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면
2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때,
모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

[제한사항]
무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

[풀이 후기]
다른 제출 답안의 길이는 겨우 7줄.
같은 O(N) 알고리즘이어도 실제 수행시간에 차이가 꽤 크게 난다는 걸 알게 되었습니다.
크게 깨달은 점 : 필요하지 않다면, 배열은 탐색만 하고 조작하지 말아야겠습니다.
*/

function countingSort(arr, min, max) {
  const countHash = arr
    .reduce((acc, num) => {
      acc[num] += 1;
      return acc;
    }, new Array(max + 1).fill(0))
    .reduce((acc, num, idx) => {
      if (idx === 0) return [0];
      acc.push(num + acc[idx - 1]);
      return acc;
    }, []);

  const result = arr.reduce((acc, num) => {
    const targetIdx = countHash[num];
    countHash[num] -= 1;
    acc[targetIdx] = num;
    return acc;
  }, []);

  return result.slice(1).reverse();
}

const solution = (pplArr, limit) => {
  const sortedArr = countingSort(pplArr, 40, 240);

  if (sortedArr[sortedArr.length - 1] > 50) return sortedArr.length;

  return sortedArr.reduce((acc, person) => {
    // 몸무게 절반 이상이면 볼 것도 없이 바로 새 배 탑승
    if (person > limit / 2) {
      acc.push([person]);
      return acc;
    }
    const len = acc.length;
    // 자기 바로 앞의 무거운 사람과 한 배 탈 수 있으면 둘이 합승시키고 출발~
    if (acc[len - 1] && acc[len - 1][0] + person <= limit) {
      acc.pop();
      acc.unshift([limit, limit]);
      return acc;
    }

    // 못 타면 아깝지만 새 배 탑승
    acc.push([person]);
    return acc;
  }, []).length;
};

// ====== 테스트 코드 ======

const testCase = [[70, 50, 80, 50], 100];
const expected = 3;
console.log(
  `입력값 ${JSON.stringify(testCase)}에 대한 solution의 답은 ${JSON.stringify(
    expected,
  )}이어야 합니다. - 실제 반환값 : ${solution(...testCase)}`,
);
