function solution(n) {
    const numStr = n.toString(2); 
    const numOfOne = numStr.match(/1/g).length; 

    if(!numStr.match(/10+1/)) {
        const newNumStr = '1' + '0'.repeat(numStr.length - (numOfOne-1) ) + '1'.repeat(numOfOne-1); 
        return parseInt(newNumStr, 2)
    }

    const lastIdxOfZero = (numStr.length - 1) - (numStr.split('').reverse().join('').indexOf('10') + 1);
    const strBeforeLastZero = numStr.slice(0,lastIdxOfZero);
    const leftOverOnes = numOfOne - 1 - strBeforeLastZero.match(/1/g).length;
    const newNumStr = strBeforeLastZero + '1' + '0'.repeat(numStr.length - (lastIdxOfZero + 1) - leftOverOnes ) + '1'.repeat(leftOverOnes);

    return parseInt(newNumStr, 2)
}