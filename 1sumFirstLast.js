function sumFirstLast(numsInput) {
    let firstNum = numsInput[0];
    let lastNum = numsInput.pop();

    let result = Number(firstNum) + Number(lastNum);

    return result;

}
 let result = sumFirstLast(['20', '30', '40']);
 console.log(result)