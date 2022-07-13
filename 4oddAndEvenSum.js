function oddAndEvenSum(number) {

    let oddDigits = getOdd(number);
    let evenDigits = getEven(number);
    let oddSum = getSum(oddDigits);
    let evenSum = getSum(evenDigits);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function getOdd(n) {
        let odd = [];

        while (n > 0) {
            let lastDigit = n % 10;

            if (lastDigit % 2 !== 0) {
                odd.push(lastDigit);
            }
            n = parseInt(n / 10);
        }
        return odd;

    }

    function getEven(n) {
        let even = [];

        while (n > 0) {
            let lastDigit = n % 10;

            if (lastDigit % 2 === 0) {
                even.push(lastDigit);
            }
            n = Math.trunc(n / 10);
        }
        return even;
    }

    function getSum(arr) {
        let sum = 0;

        for (let number of arr) {
            sum += number;
        }
        return sum;
    }
}
oddAndEvenSum(3495892137259234)