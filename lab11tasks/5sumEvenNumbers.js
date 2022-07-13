function sumEvenNumbers(stringNumbers) {
    let sumOfEvenNumbers = 0;
    let numbers = [];
    let stringNumLength = stringNumbers.length;

    for (let i = 0; i < stringNumLength; i++) {

        numbers[i] = Number(stringNumbers[i]);
    }

    for (let even of numbers) {
        if (even % 2 === 0) {
            sumOfEvenNumbers += even;
        }
    }

    console.log(sumOfEvenNumbers);
}

sumEvenNumbers(['2','4','6','8','10']);