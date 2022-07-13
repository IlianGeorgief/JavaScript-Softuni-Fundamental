function addOrSubtract(numbers) {
    let newArr = [];
    let sumOfOldArrNumbers = 0;
    let sumOfNewArrNumbers = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            newArr.push(numbers[i] + i);
        } else {
            newArr.push(numbers[i] - i);
        }
        sumOfOldArrNumbers += numbers[i];
        sumOfNewArrNumbers += newArr[i];
    }
    
    console.log(newArr);
    console.log(sumOfOldArrNumbers);
    console.log(sumOfNewArrNumbers);
}
addOrSubtract([5, 15, 23, 56, 35]);