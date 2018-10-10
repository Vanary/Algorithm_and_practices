function solution(A,B){
    const a = A.sort(); // Ascending order
    const b = B.sort( (a,b) => b - a ) // Descending order
    const len = a.length;
    
    let count = 0;
    for (let i = 0; i < len; i++) {
        count += a.pop() * b.pop();
    }

    return count
}