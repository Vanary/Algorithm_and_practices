function solution(bLen, bWeight, tWeightsArr) {
    const bridge = new Array(bLen);
    tWeightsArr.push('END');
    let bridgeOnLoad = 0;
    for (let turn = 0; ; turn++) {
        if (bridge[0] === 'END') return turn
        const leftTruck = bridge.shift();
        bridgeOnLoad -= (leftTruck) ? leftTruck : 0;

        const nextTruck = tWeightsArr[0];
        if (nextTruck === 'END' || (bridgeOnLoad + nextTruck) <= bWeight) {
            if (nextTruck !== 'END') bridgeOnLoad+= nextTruck;
            bridge.push(tWeightsArr.shift())
            continue;
        }
        bridge.push(undefined);
    }
}