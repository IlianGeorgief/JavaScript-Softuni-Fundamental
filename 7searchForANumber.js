function searchForANumber(arr1, arr2) {
    let getNumbers = arr1.slice(0, arr2[0])
    let counter = 0;
    let searchedNumber = arr2[2];
    let secondGetNumbers = getNumbers.splice(0, arr2[1]);

    for (n of getNumbers) {
        if (n === searchedNumber) {
            counter++;
        }
    }
    console.log(`"Number ${searchedNumber} occurs ${counter} times."`)
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)