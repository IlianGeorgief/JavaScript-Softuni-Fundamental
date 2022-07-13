function evenandOddSubtraction(numbers) {
    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers += num;
        } else {
            oddNumbers += num;
        }
    }
    let difference = evenNumbers - oddNumbers;
    console.log(difference);
}

evenandOddSubtraction([2,4,6,8,10]);