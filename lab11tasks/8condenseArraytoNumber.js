function condenseArrayToNumber(numbers) {
    let nums = numbers;
    if (nums.length < 2) {
        console.log(`${nums} is already condensed to number`);
        return;
    }
    let condensed = [];

    for (let i = 0; i < nums.length; i++) {
        
        condensed[i] = nums[i] + nums[i + 1];

        if (isNaN(condensed[i])) {
            condensed.pop();
        }

        if( i === nums.length-1 ) {
            nums = condensed;
            condensed = [];
            i = -1;

            if (nums.length === 1) {
                console.log(nums.toString());
                return;
            }
        }   
    }
}

condenseArrayToNumber([2])