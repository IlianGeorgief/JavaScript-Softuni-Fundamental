function palindromeIntegers(arr) {

    for (let number of arr) {
        let reversedNumber = reverseNum(number);
        console.log(number === reversedNumber);
    }

    function reverseNum(num) {
        let reversed = '';

        while (num > 0) {
            let lastDigit = num % 10;
            reversed += lastDigit;
            num = parseInt (num / 10);
        }
        return Number(reversed);
    }
}
palindromeIntegers([32,2,232,1010])