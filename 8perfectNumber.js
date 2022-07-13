function perfectNumber(num) {
    let halfOfNum = num / 2;
    let sum = 0;

    const arr = [1];
    for (let i = 2; i <= halfOfNum; i++) {

        if (num % i === 0) {
            arr.push(i);
        }
    }

    for (const divisor of arr) {
        sum += divisor;
    }

    if (sum === num) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }


}
perfectNumber(28)