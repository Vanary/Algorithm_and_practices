function solution(array, commands) {
    const answer = [];

    for(let command of commands) {
        answer.push(kthItem(array, command));
    }
      
    console.log(answer);
    return answer;
}

function kthItem(array, commandArr) {
    const tempArray = array.slice();
    let [num1, num2, num3] = commandArr;
    //자르기
    let idx1 = --num1;
    let idx2 = --num2;
    const splicedArr = tempArray.splice(idx1, (idx2-idx1+1));

    //정렬하기
    const sortedArr = splicedArr.sort((a, b) => a-b);

    //반환하기
    return sortedArr[num3-1]
}
