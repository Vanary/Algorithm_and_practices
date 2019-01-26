/*
https://programmers.co.kr/learn/courses/30/lessons/42841?language=javascript

[L2]_숫자_야구.js

[문제 설명]

숫자 야구 게임이란 2명이 서로가 생각한 숫자를 맞추는 게임입니다.
각자 서로 다른 1~9까지 3자리 임의의 숫자를 정한 뒤 서로에게 3자리의 숫자를 불러서 결과를 확인합니다.
그리고 그 결과를 토대로 상대가 정한 숫자를 예상한 뒤 맞힙니다.
* 숫자는 맞지만, 위치가 틀렸을 때는 볼
* 숫자와 위치가 모두 맞을 때는 스트라이크
* 숫자와 위치가 모두 틀렸을 때는 아웃

예를 들어, 아래의 경우가 있으면
A : 123
B : 1스트라이크 1볼.
A : 356
B : 1스트라이크 0볼.
A : 327
B : 2스트라이크 0볼.
A : 489
B : 0스트라이크 1볼.

이때 가능한 답은 324와 328 두 가지입니다.

질문한 세 자리의 수, 스트라이크의 수, 볼의 수를 담은 2차원 배열 baseball이 매개변수로 주어질 때,
가능한 답의 개수를 return 하도록 solution 함수를 작성해주세요.

[제한사항]

질문의 수는 1 이상 100 이하의 자연수입니다.
baseball의 각 행은 [세 자리의 수, 스트라이크의 수, 볼의 수] 를 담고 있습니다.

[풀이 후기]
아 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 나쁜 버릇이 또 나왔습니다.
꼭 모든 데이터를 규칙에 맞춰 처리한 결과를 볼 게 아니라,
데이터가 규칙에 맞는지 확인하는 식으로 정리하는 게 더 코드가 간결한 것 같습니다.
*/

const oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const combinations = [];
for (const num1 of oneToNine) {
  for (const num2 of oneToNine) {
    for (const num3 of oneToNine) {
      if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
        combinations.push(`${num1}${num2}${num3}`);
      }
    }
  }
}

function solution(trialsArr) {
  function caseFilter([input, strike, ball]) {
    const inputStr = input.toString();
    const scenario = {
      '00': combinations.filter((combi) => {
        let result = true;
        [...inputStr].forEach((numChar) => {
          if (combi.indexOf(numChar) > -1) result = false;
        });
        return result;
      }),
      '01': combinations.filter((combi) => {
        for (let i = 0; i < 3; i += 1) {
          const other1 = i + 1 >= 3 ? (i + 1) % 3 : i + 1;
          const other2 = i + 2 >= 3 ? (i + 2) % 3 : i + 2;
          if (
            combi.indexOf(inputStr[i]) > -1
            && inputStr[i] !== combi[i]
            && combi.indexOf(inputStr[other1]) < 0
            && combi.indexOf(inputStr[other2]) < 0
          ) return true;
        }
        return false;
      }),
      '02': combinations.filter((combi) => {
        for (let i = 0; i < 3; i += 1) {
          const other1 = i + 1 >= 3 ? (i + 1) % 3 : i + 1;
          const other2 = i + 2 >= 3 ? (i + 2) % 3 : i + 2;
          if (
            combi.indexOf(inputStr[i]) < 0
            && (combi.indexOf(inputStr[other1]) > -1 && combi[other1] !== inputStr[other1])
            && (combi.indexOf(inputStr[other2]) > -1 && combi[other2] !== inputStr[other2])
          ) return true;
        }
        return false;
      }),
      '03': [
        `${inputStr[1]}${inputStr[2]}${inputStr[0]}`,
        `${inputStr[2]}${inputStr[0]}${inputStr[1]}`,
      ],
      10: combinations.filter((combi) => {
        for (let i = 0; i < 3; i += 1) {
          const other1 = i + 1 >= 3 ? (i + 1) % 3 : i + 1;
          const other2 = i + 2 >= 3 ? (i + 2) % 3 : i + 2;
          if (
            inputStr[i] === combi[i]
            && combi.indexOf(inputStr[other1]) < 0
            && combi.indexOf(inputStr[other2]) < 0
          ) return true;
        }
        return false;
      }),
      11: combinations.filter((combi) => {
        for (let i = 0; i < 3; i += 1) {
          const other1 = i + 1 >= 3 ? (i + 1) % 3 : i + 1;
          const other2 = i + 2 >= 3 ? (i + 2) % 3 : i + 2;
          if (inputStr[i] === combi[i]) {
            if (combi.indexOf(inputStr[other1]) < 0 && combi[other1] === inputStr[other2]) return true;
            if (combi.indexOf(inputStr[other2]) < 0 && combi[other2] === inputStr[other1]) return true;
          }
        }
        return false;
      }),
      12: combinations.filter((combi) => {
        for (let i = 0; i < 3; i += 1) {
          const other1 = i + 1 >= 3 ? (i + 1) % 3 : i + 1;
          const other2 = i + 2 >= 3 ? (i + 2) % 3 : i + 2;
          if (
            inputStr[i] === combi[i]
            && combi[other2] === inputStr[other1]
            && combi[other1] === inputStr[other2]
          ) return true;
        }
        return false;
      }),
      20: combinations.filter((combi) => {
        if (inputStr[0] === combi[0]) {
          if (inputStr[1] === combi[1] && inputStr[2] !== combi[2]) return true;
          if (inputStr[2] === combi[2] && inputStr[1] !== combi[1]) return true;
          return false;
        }
        if (inputStr[1] === combi[1] && inputStr[2] === combi[2]) return true;
        return false;
      }),
      30: [inputStr],
    };

    return scenario[`${strike}${ball}`];
  }

  return trialsArr.reduce(
    (leftCombis, trial) => leftCombis.filter(combi => caseFilter(trial).indexOf(combi) > -1),
    combinations,
  ).length;
}

const expected = 2;
const args = [[[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]];
console.log(
  `입력값 ${args}에 대한 solution의 답은 ${expected}이어야 합니다. - 실제 반환값 : ${solution(
    ...args,
  )}`,
);
