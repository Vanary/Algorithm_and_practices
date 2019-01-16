/*
https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다.

어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다.
위키백과에 따르면, H-Index는 다음과 같이 구합니다.
어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고
나머지 논문이 h번 이하 인용되었다면 h가 이 과학자의 H-Index입니다.
어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때,
이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

[제한사항]
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

*/

function solution(dataArr) {
  let hIndex = 0;

  dataArr
    .sort((a, b) => b - a) // 논문을 인용수가 큰 순서로 정렬하고
    .forEach((refNum, idx) => {
      // 앞서 h-index가 기록되었다면 더 작은 인용수는 고려 안함
      if (hIndex > idx + 1) return;
      // h번째로 큰 논문이 h회 이상 인용되었다면 h-index 기록
      if (refNum >= idx + 1) hIndex = idx + 1;
    });

  return hIndex;
}

const args = [1, 2, 1000, 999, 5];
console.log(
  `입력값 ${args}에 대한 solution의 답은 3이어야 합니다. - 실제 반환값 : ${solution(args)}`,
);
