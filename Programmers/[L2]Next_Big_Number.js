function solution(n) {
    const numStr = n.toString(2); 
    const numArr = numStr.split('');
    const numOfOne = numStr.match(/1/g).length; 
    const firstZeroBeforeOneIdx = (numStr.match(/01/)) ? numStr.match(/01/).index : -1;
    
    if (firstZeroBeforeOneIdx < 0) { 
        if (numOfOne === numStr.length) {
            return parseInt( '10' + numStr.slice(1) , 2)
        } else {
            return parseInt( '1' + '0'.repeat(numStr.length - (numOfOne-1)) + '1'.repeat(numOfOne-1) , 2)
        }
    }
    
    const newNumStr = numStr.slice(0, firstZeroBeforeOneIdx) +
                     '1' + 
                     '0'.repeat(numStr.length-(firstZeroBeforeOneIdx+1)-(numOfOne-2))  +
                     '1'.repeat(numOfOne-2);
 
    return parseInt(newNumStr, 2)
}


console.log('78' , solution(78) === 83);
console.log('15', solution(15) === 23);

console.log('6', solution(6) === 9);

// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

// 제한 사항
// n은 1,000,000 이하의 자연수 입니다.