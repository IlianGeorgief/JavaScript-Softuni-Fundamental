function mergeArrays(arr1, arr2) {
    let resultArr = [];

    for (let i in arr1) {
        let result = "";
        let arrElement1 = arr1[i];
        let arrElement2 = arr2[i];

        if (i % 2 === 0) {
            result = Number(arr1[i]) + Number(arr2[i]);
        } else {
            result = arrElement1 + arrElement2;
        }
        resultArr.push(result);
    }

    console.log(resultArr.join(' - '));
}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)