// 선입선출 = 큐!

function solution(prog, speed) {
    const batch = [];
    while (true) {
        if (prog.length === 0) return batch
        const itemToPub = [];
        const updatedProg = prog.map( (el, i) => el + speed[i]);    
        for (let task = updatedProg[0]; updatedProg.length !== 0; task = updatedProg[0]) {
            if (task < 100) break;
            itemToPub.push(updatedProg.shift());
        }
        if (itemToPub.length) batch.push(itemToPub.length) 
        prog = updatedProg;
        speed = speed.slice(itemToPub.length);
    }
}

console.log( solution([93,30,55] ,	[1,30,5]) , [2,1]);