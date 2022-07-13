function arrayRotation(arr, num) {
    let rotation = num % arr.length;
    let arrResult = [];

    for (let i in arr) {
        if (i >= rotation) {
            let element = arr[i];
            arrResult.push(element);
        }
    }

    for (let i in arr) {
        if (i < rotation) {
            let element = arr[i];
            arrResult.push(element);
        } else {
            break;
        }
    }

    console.log(arrResult.join(" "))
}

arrayRotation([51, 47, 32, 61, 21], 2)