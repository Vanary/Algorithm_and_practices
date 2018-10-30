/*
1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다.
표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. (단, 정사각형이란 축에 평행한 정사각형을 말합니다.)
예를 들어
1	2	3	4
0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0
가 있다면 가장 큰 정사각형 넓이는 9가 되므로 9를 반환해 주면 됩니다.

제한사항
표(board)는 2차원 배열로 주어집니다.
표(board)의 행(row)의 크기 : 1000 이하의 자연수
표(board)의 열(column)의 크기 : 1000 이하의 자연수
표(board)의 값은 1또는 0으로만 이루어져 있습니다.

실패중인 테스트들
[7, 10, 11, 14, 15, 17]
*/

function solution(board){
  const [maxRowIdx, maxColIdx] = [board.length - 1, board[0].length - 1];
  const hashArr = (() => {
    const hashBase = [];
    for (let i = 0; i < maxRowIdx + 1; i++) {
      hashBase.push(new Array(maxColIdx+1).fill(0));
    }
    return hashBase
  })();
	let maxSquareLen = 0;
  
  let [rowIdx, colIdx] = [0, 0];
	while (rowIdx <= maxRowIdx) {
    const newSquareLen = checkSquare(rowIdx, colIdx, board, hashArr);
    if (newSquareLen > maxSquareLen) maxSquareLen = newSquareLen
    
		colIdx++;
		if (colIdx > maxColIdx) {
			colIdx = 0;
			rowIdx++;
		}
	}

	return Math.pow(maxSquareLen, 2)
}

function checkSquare(rowIdx, colIdx, board, hashArr) {
	if (!board[rowIdx][colIdx]) return 0 
  
  if (colIdx === 0 || rowIdx === 0) {
    hashArr[rowIdx][colIdx] = 1;
    return 1
  }
  if (!hashArr[rowIdx - 1][colIdx - 1] || !hashArr[rowIdx - 1][colIdx] || !hashArr[rowIdx][colIdx - 1]) {
    hashArr[rowIdx][colIdx] = 1;
    return 1
  }

  const squareLen = Math.min(hashArr[rowIdx - 1][colIdx - 1], hashArr[rowIdx - 1][colIdx], hashArr[rowIdx][colIdx - 1]) + 1;
  hashArr[rowIdx][colIdx] = squareLen;
  
  return squareLen
}


const testModule = require('./Programmers_testing_template');
const tester = testModule.fn_test;
const TestScenario = testModule.Class_TestScenario;

tester('기본 테스트 1 - [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]', new TestScenario({
  'givenArr': [[[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]],
  'whenFn': solution,
  'thenVal': 9,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 1-1 - [[0,1,0,0],[1,0,1,1],[1,1,0,1],[0,0,1,0]]', new TestScenario({
  'givenArr': [[[0,1,0,0],[1,0,1,1],[1,1,0,1],[0,0,1,0]]],
  'whenFn': solution,
  'thenVal': 1,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 2 - [[0,0,1,1],[1,1,1,1]]', new TestScenario({
  'givenArr': [[[0,0,1,1],[1,1,1,1]]],
  'whenFn': solution,
  'thenVal': 4,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 3 - [[0,0],[0,0]]', new TestScenario({
  'givenArr': [[[0,0],[0,0]]],
  'whenFn': solution,
  'thenVal': 0,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 4 - [[0,1,1,0],[1,1,1,0]]', new TestScenario({
  'givenArr': [[[0,1,1,0],[1,1,1,0]]],
  'whenFn': solution,
  'thenVal': 4,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 5 - [[1,1],[1,1]]', new TestScenario({
  'givenArr': [[[1,1],[1,1]]],
  'whenFn': solution,
  'thenVal': 4,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 6 - 답이 0인 경우 [[0],[0]]', new TestScenario({
  'givenArr': [[[0],[0]]],
  'whenFn': solution,
  'thenVal': 0,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 7-1 - 1x1 보드 [[0]]', new TestScenario({
  'givenArr': [[[0]]],
  'whenFn': solution,
  'thenVal': 0,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 7-2 - 1x1 보드 [[1]]', new TestScenario({
  'givenArr': [[[1]]],
  'whenFn': solution,
  'thenVal': 1,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 8-1 - 1000x1000 보드 모두 0', new TestScenario({
  'givenArr': [new Array(1000).fill(new Array(1000).fill(0))],
  'whenFn': solution,
  'thenVal': 0,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 8-2 - 1000x1000 보드 모두 1', new TestScenario({
  'givenArr': [new Array(1000).fill(new Array(1000).fill(1))],
  'whenFn': solution,
  'thenVal': 1000000,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 9-1 - 1000x1 보드 모두 1', new TestScenario({
  'givenArr': [new Array(1000).fill([1])],
  'whenFn': solution,
  'thenVal': 1,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))
tester('기본 테스트 9-2 - 1000x100 보드 모두 1', new TestScenario({   // TOO BIG!
  'givenArr': [new Array(1000).fill(new Array(100).fill(1))],
  'whenFn': solution,
  'thenVal': 10000,
  'assertionFn': (expectedResult, actualResult) => expectedResult === actualResult,
}))