/*
https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

[L2]_카펫.js

[문제 설명]

Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 빨간색으로 칠해져 있고 모서리는 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
[ ][ ][ ][ ]
[ ][V][V][ ]
[ ][ ][ ][ ]
Leo는 집으로 돌아와서 아까 본 카펫의 빨간색(V)과 갈색([ ])으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
Leo가 본 카펫에서 갈색 격자의 수 brown, 빨간색 격자의 수 red가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

[제한사항]

갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
빨간색 격자의 수 red는 1 이상 2,000,000 이하인 자연수입니다.
카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

[풀이 후기]
'완전탐색' 카테고리의 문제라, 경우의 수를 미리 뽑아내고 각 가능성을 검사하는 방향으로 해결.
다른 사람들 코드는 더 로직이 추상화되어서 코드가 간결했습니다.
너무 세세한 부분까지 정의하고 계산하기 보다, 요구사항을 만족할 수 있다면 추상화된 코드로 처리해야겠다는 깨우침을 얻고 갑니다.
*/

function solution(brown, red) {
  const dividerCap = Math.round(Math.sqrt(red));
  const redCases = [];
  for (let i = 1; i <= dividerCap; i += 1) {
    if (red % i === 0) redCases.push([red / i, i]);
  }

  let possibleCaseIdx;
  let paddingSize = 1;
  while (true) {
    const brownCases = redCases.map(
      ([width, height]) => (width + 2 * paddingSize) * 2 * paddingSize + height * 2 * paddingSize,
    );
    possibleCaseIdx = brownCases.indexOf(brown);
    if (possibleCaseIdx > -1) break;
    if (brownCases.every(brownCase => brownCase > brown)) break;
    paddingSize += 1;
  }

  const width = redCases[possibleCaseIdx][0] + 2;
  const height = redCases[possibleCaseIdx][1] + 2;
  return [width, height];
}

const args = [10, 2];
const expected = [4, 3];
console.log(
  `입력값 ${args}에 대한 solution의 답은 ${expected}이어야 합니다.
  - 실제 반환값 : ${solution(...args)}`,
);
