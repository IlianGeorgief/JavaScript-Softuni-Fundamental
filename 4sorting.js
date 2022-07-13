function sorting(numbers) {
    let newArr = numbers.sort(compare);

    function compare(a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }

    let arr = [];
    for (let i = 0; i < newArr.length; i++) {
        arr.push(newArr.pop());
        arr.push(newArr[i]);    
    }
    
    console.log(arr.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])