function solution(n, m) {
    return [computeGCF(n,m), computeLCM(n,m)]
}

// 약수뽑기 - loop 돌려서 하나하나 나눠보기
function saveCF(n,m) {
    const smallNum = Math.min(n,m);
    const cfArr = [];
    for (let i = 2; i <= smallNum; i++) {
        if(n % i === 0 && m % i === 0) {
            cfArr.push(i);
            let possibleOtherCF = saveCF(n/i, m/i);
            if(possibleOtherCF) cfArr.push(...possibleOtherCF);
            break;
        }
    }

    return cfArr
}
// GCF 계산
function computeGCF(n,m) {
    const cfArr = saveCF(n,m);
    let gcf = 1;
    for (let num of cfArr) {
        gcf *= num;
    }
    return gcf
}

// GCF로 서로소값 계산
function computeLCM(n,m) {
    const gcf = computeGCF(n,m);
    const N = n/gcf;
    const M = m/gcf;

    return gcf * N * M
}
// 뽑은 GCF/서로소로 LCM 출력
// Profit!!




const num1 = 3;
const num2 = 12;

console.log(computeGCF(num1, num2));

console.log(computeLCM(num1, num2));