function equalSums(arr) {

    let result = 'no';

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let y = 0; y < i; y++) {//legt sum
            let nextLeftNum = arr[y];
            leftSum += nextLeftNum;
        }

        for (let index = i + 1; index < arr.length; index++) {//right sum
            let nextRightNum = arr[index];
            rightSum += nextRightNum;
        }

        if (leftSum === rightSum) {
            result = i;
            break;
        }
    }
    console.log(result);
}
equalSums([1])