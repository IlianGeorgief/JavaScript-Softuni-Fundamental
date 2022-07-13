function smallestTwoNumbers(nums) {
    let smallestNums = nums.sort((a, b) => {
        return a - b;
    });
    // 
    let smallers = smallestNums.slice(0, 2);

    console.log(smallers.join(' '));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])