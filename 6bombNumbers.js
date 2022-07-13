function bombNumbers(arr1, arrBomb) {
    let index = arr1.indexOf(arrBomb[0]);

    while (index > -1) {
        arr1.splice((index - arrBomb[1]), arrBomb[1]) //from left;
        index = arr1.indexOf(arrBomb[0]);
        arr1.splice(index, (arrBomb[1] + 1)) //from right;
        index = arr1.indexOf(arrBomb[0]);
    }

    console.log(calcSum(arr1));
    function calcSum(array) {
        let sum = 0;

        for (let n of array) {
            sum += n;
        }
        return sum;
    }
}
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)