function solution(arr1, arr2){
    const row = arr1.length;
    const col = arr2[0].length;
    const result = new Array(row);
    for (let c = 0; c < row; c++ ) {
        result[c] = new Array(col).fill(0);
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            for (let k = 0; k < arr1[0].length; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return result
}


// Programmers testing template
const testArgs = [[[1,2,3,4,5], [3,5,7,9,11]], [[2],[4],[6],[8],[10]]];
const expectedAnswer = [[15, 15], [15, 15], [15, 15]];
// const testArgs = [[[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]];
// const expectedAnswer = [[15, 15], [15, 15], [15, 15]];

console.log(solution(...testArgs), '결과는',  expectedAnswer);