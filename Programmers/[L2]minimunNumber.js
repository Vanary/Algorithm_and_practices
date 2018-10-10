function solution(A,B){
    const a = A.sort( (a,b) => a - b ); // Ascending order
    const b = B.sort( (a,b) => b - a ) // Descending order
    const len = a.length;
    
    let arrSum = 0;
    for (let i = 0; i < len; i++) {
        arrSum += a.pop() * b.pop();
    }

    return arrSum
}

const result = solution([5, 20, 100], [4,5,6]);
console.log(result);