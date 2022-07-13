function sumofFirrstAndLast(numbers) {
    let first = Number(numbers.shift());
    let last = Number(numbers.pop());

    console.log(first + last);
}

sumofFirrstAndLast(['20', '30', '40']);