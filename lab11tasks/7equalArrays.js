function equalArrays(firstArr, secondArr) {
    let summ = 0;

    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] === secondArr[i]) {
            summ += Number(firstArr[i])
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return
        }
    }

        console.log(`Arrays are identical. Sum: ${summ}`)
}

equalArrays(['10','20','30'], ['10','20','40']);