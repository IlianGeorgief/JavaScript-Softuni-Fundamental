function sorting(numbers) {

    let compareFunction = function (a, b) {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    }

    console.log(numbers.sort(compareFunction))
}
sorting ([9, 8, 10, 2, 1, 5])