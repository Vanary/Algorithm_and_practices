function solution(arr) { // O(N^2)
    const groundSize = arr[0]; //7
    const ground = arr.splice(1); // [ [011..], [011..], ... ]
    const hash = ground.map( row => new Array(7).fill(undefined) );
    let numOfTowns = 0;
    let numOfAPTs = 0;
    let result = [];

    function countAPTsInTown(idxI, idxJ) {
        function tagBlock(idxI, idxJ) {
            const targetBlock = ground[idxI][0][idxJ];
            if (hash[idxI][idxJ] !== undefined) {
                return
            }
            if (targetBlock === '0') {
                hash[idxI][idxJ] = false;    
                return
            }
            hash[idxI][idxJ] = `apt${numOfTowns}`;
            numOfAPTs++;
            
            if (idxJ !== groundSize-1) {
                tagBlock(idxI, idxJ+1);
            }
            if (idxJ !== 0) {
                tagBlock(idxI, idxJ-1);
            }
            if (idxI !== groundSize-1) {
                tagBlock(idxI+1, idxJ);
            }
            if (idxI !== 0) {
                tagBlock(idxI-1, idxJ);
            }
            
        }
        if (hash[idxI][idxJ] !== undefined) {
            return
        }
        if (ground[idxI][0][idxJ] === '0') {
            hash[idxI][idxJ] = false;    
            return
        }
        numOfTowns++;
        tagBlock(idxI, idxJ);

        result.push(numOfAPTs);

        numOfAPTs = 0;
        
    }

    for (let i = 0; i < groundSize; i++) {
        for (let j = 0; j < groundSize; j++) {
            countAPTsInTown(i,j);
        }
    }

    console.log(`We have ${result.length} towns. Order of towns per APTs in them is ${result.sort((a,b) => a - b)}`);
}

solution([7, [`0110100`], [`0110101`], [`1110101`], [`0000111`], [`0100000`], [`0111110`], [`0111000`]]);

// INPUT 
// 7
// 0110100
// 0110101
// 1110101
// 0000111
// 0100000
// 0111110
// 0111000

// OUTPUT
// 3
// 7
// 8
// 9