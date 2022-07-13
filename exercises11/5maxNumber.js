function maxNumber(arr) {
    let newArr = "";
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isBigger = true;

        for (let y = i + 1; y < arr.length; y++) { 
            let nextNum = arr[y];
            if (num <= nextNum) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newArr += `${num} `;
        }
    }

    console.log(newArr);

}
maxNumber([41, 41, 34, 20])