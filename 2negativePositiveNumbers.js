function negativePositiveNumbers(nums) {

    let newArr = [];

    for (let i = 0; i <= nums.length - 1; i++) {

        if (nums[i] < 0) {
            newArr.unshift(nums[i]);
        } else {
            newArr.push(nums[i]);
        }
    }
    console.log(newArr.join('\n'))
}
negativePositiveNumbers([3, -2, 0, -1])
