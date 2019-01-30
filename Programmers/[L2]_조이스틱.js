/*
https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

[L2]_조이스틱.js

[문제 설명]

조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA
조이스틱을 각 방향으로 움직이면 아래와 같습니다.
▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동

예를 들어 아래의 방법으로 JAZ를 만들 수 있습니다.
- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.

만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

[제한 사항]
name은 알파벳 대문자로만 이루어져 있습니다.
name의 길이는 1 이상 20 이하입니다.

[풀이 후기]
테스트코드를 짜두고 푸니 편했던 것 같습니다.
제출 후 다른 답안들을 확인해보니 제가 작업할 때 쓴 테스트코드가 문제의 요구사항보다 더 엄격해서, 괜시리 뿌듯(?)했습니다.
소박한 자랑삼아 이번 풀이에는 사용한 테스트 항목들도 함께 남겨둡니다.
*/

const solution = (nameStr) => {
  const charCodeOfA = 'A'.charCodeAt(); // 65
  const charCodeOfZ = 'Z'.charCodeAt(); // 90
  const middleCharCode = 78; // N

  const numOfMovesArr = nameStr.split('').map((char) => {
    const charCode = char.charCodeAt();
    return charCode <= middleCharCode ? charCode - charCodeOfA : charCodeOfZ - charCode + 1;
  });

  const direction = numOfMovesArr[numOfMovesArr.length - 1] === 0
    ? numOfMovesArr // 마지막이 A라면 우측으로 그냥 진행하고,
    : [numOfMovesArr[0], ...numOfMovesArr.slice(1).reverse()]; // 마지막이 A가 아니라면 좌측으로 역순 진행

  const result = direction.reduce((acc, moveNum, idx) => {
    if (
      direction[idx] === 0
      && direction.slice(idx).reduce((leftOverSum, num) => leftOverSum + num, 0) === 0
    ) return acc; // 마지막 남은 문자가 전부 A라면 더 진행할 필요 없음
    return acc + moveNum + 1;
  }, -1);

  return result === -1 ? 0 : result; // 이름이 'AA....'라면 조작 불필요. 0 반환
};

// ====== 테스트 코드 ======

testCase = ['JEROEN'];
expected = 56;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);

testCase = ['JAN'];
expected = 23;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);

testCase = ['AAA'];
expected = 0;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);

testCase = ['ZZA'];
expected = 3;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);

testCase = ['M'];
expected = 12;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);

testCase = ['ZZZ'];
expected = 5;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);

testCase = ['AN'];
expected = 14;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);

testCase = ['XYZ'];
expected = 2 + 6;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);

testCase = ['ANMA'];
expected = 27;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);

testCase = ['NNN'];
expected = 2 + 13 * 3;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);

testCase = ['AAAZ'];
expected = 2;
console.log(
  `입력값 ${testCase}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...testCase,
  )}`,
);
