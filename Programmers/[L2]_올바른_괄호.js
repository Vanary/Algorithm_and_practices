function solution(s){
    const result = s.split('');
    const stack = [];
    for (let char of result) {
        if (char === '(') {
            stack.push('open');
            continue;
        }
        if (stack.length <= 0) return false
        stack.length--;
    }
    
    return (stack.length === 0) ? true : false
}


// Programmers testing template
const testArgs = [`()()`];
const expectedAnswer = true;

console.log(solution(...testArgs), expectedAnswer);