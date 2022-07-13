function sortAnArrayBy2Criteria(strings) {
    let ascending = strings.sort(compare);

    function compare(a, b) {
        if (a.length < b.length) {
            return -1;
        }
        else if (a.length > b.length) {
            return 1;
        }
        else {
            // a must be equal to b
            return a.localeCompare(b);
        }
    }
    console.log(ascending.join('\n'))
}

sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])