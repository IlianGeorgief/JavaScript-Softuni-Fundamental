function processOddNumbers(nums) {
    let oddNumbers = [];

    for (i in nums) {
        if (i % 2 !== 0) {
            let doubledNum = nums[i] * 2;
            oddNumbers.push(doubledNum);
        }
    }

    console.log(oddNumbers.reverse().join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);