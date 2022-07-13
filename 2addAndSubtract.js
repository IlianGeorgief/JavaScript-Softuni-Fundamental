function addAndSubtract(num1, num2, num3) {
    let sumOfFirstTwo = sum(num1, num2);
    let subtracted = addAndSubtract();
    function sum(a, b) {
        return a + b;
    }
    function addAndSubtract() {
        return sumOfFirstTwo - num3;
    }

    console.log(subtracted);
}
addAndSubtract(42, 58, 100)