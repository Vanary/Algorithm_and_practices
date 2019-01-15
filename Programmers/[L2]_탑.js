function solution(heights) {
    const tempTowers = heights.reverse();
    const len = tempTowers.length;
    const towerLocation = (idx) => len - idx;
    const answer = [];
    for (let i = 0; i < len; i++) {
        const sender = tempTowers[i];
        let found = false;
        for (let j = i+1; j < len; j++) {
            if(tempTowers[j] > sender) {
                answer.unshift(towerLocation(j));
                found = true;
                break;
            }
        }
        if (!found) {
            answer.unshift(0);    
        }
        
    }
    return answer
}

console.log(solution([6,9,5,7,4]));
//[0,0,2,2,4]
