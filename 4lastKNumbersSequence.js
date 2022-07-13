function lastKNumbersSequence(n, k) {
    let arr = [1];

    for (let i = 0; i < k; i++) {
        let sum = arr[i] + i;
        arr.push(sum);
    }

    while (arr.length < n) {
        let newArr = arr.slice(arr.length - k);
        let sum = 0;

        for (let y = 0; y < k; y++) {
            sum += newArr[y];
        }
        arr.push(sum);
    }

    console.log(arr.join(' '));
}
lastKNumbersSequence(8, 2)