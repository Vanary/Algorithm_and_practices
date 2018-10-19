function solution(n) {
    let totalCount = 0;
    for (let i = 1; i < n/2 + 1; i++) {
        let count = 0;
        for (let j = i; j < n/2 + 1; j++) {
            count += j;
            if (count === n) {
                totalCount++;
                break;
            }
            if (count > n) break;
        }
    }
    return totalCount + 1 
}



// Programmers testing template
const testArgs = [15];
const expectedAnswer = 4;

console.log(solution(...testArgs), expectedAnswer);