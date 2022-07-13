function factorialDivision(num1, num2) {
    let firstFactorial = factorial(num1);
    let secondFactorial = factorial(num2);

    function factorial(number) {
        let result = 1;
        for ( let i = 1; i <= number; i++) {
            
            result *= i;
        }
        return result;
    }

    console.log((firstFactorial / secondFactorial).toFixed(2))
}
factorialDivision(6, 2)