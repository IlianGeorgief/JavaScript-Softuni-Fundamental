function mathPower(num, raisingdNum) {
    let result = 1;
    for (let i = 0; i < raisingdNum; i++) {
        result *= num;
    }

    return result;
}
console.log (mathPower(3, 4))