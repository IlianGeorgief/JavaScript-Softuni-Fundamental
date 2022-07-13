function repeatString(string, repeatNum) {
    let result = '';

    for (let i = 1; i <= repeatNum; i++) {
        result += string;
    }
    return result;
}
console.log(repeatString('String', 2))