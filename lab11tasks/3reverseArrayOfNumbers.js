function reverse(n, inputArray) {
    let newArray = [];
    let reversedArray = [];

    for (let i = 0; i < n; i++) {
        newArray.push(inputArray[i]);
    }
    reversedArray = newArray.reverse();
    let arrString = reversedArray.join(' ');

    console.log(arrString);
}

reverse(3, [10, 20, 30, 40, 50]);