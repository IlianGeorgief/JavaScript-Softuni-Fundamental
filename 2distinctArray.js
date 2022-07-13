function distinctArray(numbers) {
    let arr = getDoubledNumbers(numbers);

    function getDoubledNumbers(collection) {
        let outArr =[];
        for(let el of collection) {
            if (!outArr.includes(el)) {
                outArr.push(el);
            }
        }
        return outArr;
    }

    console.log(arr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])