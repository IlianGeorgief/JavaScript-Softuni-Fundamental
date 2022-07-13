function wrongResult(num1, num2, num3) {
    
    let result = num1 / num2 / num3;
    if (result > 0 ) {
        result = 'Positive';
    }else {
        result = 'Negative';
    }

    console.log(result)
}
wrongResult(-6, -12, 14)