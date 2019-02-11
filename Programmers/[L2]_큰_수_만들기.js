/*
https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

[L2]_큰_수_만들기.js

[문제 설명]
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.
문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다.

number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

[제한 조건]
number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.

[풀이 후기]
while과 for의 매력.
알고리즘 푸는 데 함수형, 객체지향, 클린코딩은 신경쓰지 말아야겠다고 생각했습니다.
일단 '되는 로직'을 가장 기본적인 도구로 만드는 게 알고리즘의 핵심이 아닐까 싶습니다.
괜한 기교를 부리면 예상 못한 오류가 생겨버리네요.
*/

function solution(numberStr, k) {
  const temp = [];
  let delCount = k;

  const len = numberStr.length;
  for (let i = 0; i < len; i++) {
    const numChar = numberStr[i];

    while (temp[temp.length - 1] < numChar && delCount > 0) {
      temp.pop();
      delCount -= 1;
    }

    temp.push(numChar);

    if (delCount === 0) {
      for (let j = i + 1; j < len; j++) {
        temp.push(numberStr[j]);
      }
      break;
    }
  }

  return temp.join('').slice(0, temp.length - delCount);
}

// ====== 테스트 코드 ======

const testCase = ['1924', 2];
const expected = '94';
console.log(
  `입력값 ${JSON.stringify(testCase)}에 대한 solution의 답은 ${JSON.stringify(
    expected,
  )}이어야 합니다. - 실제 반환값 : ${solution(...testCase)}`,
);
