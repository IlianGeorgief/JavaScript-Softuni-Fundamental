function magicSum(arr, num) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        let element = arr[i];

        for (let index = i + 1; index < arr.length; index++) {
            let nextElement = arr[index];
            let magicNum = (element + nextElement) === num;

            if (magicNum) {
                result.push(`${element} ${nextElement}`);
            }
        }        
    }
    console.log(result.join('\n'));
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27  
)