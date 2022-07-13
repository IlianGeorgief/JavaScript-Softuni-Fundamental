function firstAndLastKNumbers(nums) {
    let k = nums.shift();
    let firstNums = nums.slice(0, k);
    let lastNums = nums.slice(nums.length - k);
    // let firstResult = '';
    // let lastResult = '';

    // for (let i = 0; i < k; i++) {
    //     firstResult += ` ${firstNums[i]}`;
    //     lastResult += ` ${lastNums[i]}`;
    // }
    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));
}

firstAndLastKNumbers([3, 6, 7, 8, 9])