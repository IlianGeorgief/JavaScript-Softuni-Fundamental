function arrayManipulator(numbers, stringComands) {
    let arr = numbers;
    // for (let i = 0; i < stringComands.length; i++) {
    //     let [command, firstNum, secondNum, n] = stringComands[i].split(' ');
    //     firstNum = Number(firstNum);
    //     secondNum = Number(secondNum);
    function add(index, el) {
        arr.splice(index, 0, el);
    }

    function addMany(...numbers) {

        let inx = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            let num = Number(numbers[i]);
            arr.splice(inx, 0, num);
            inx++
        }
        return arr;
    }

    function contains(contains, el) {
        return contains.indexOf(el);
    }

    function remove(index) {
        arr.splice(index, 1);
    }

    function shift(shift) {
        let newArr = arr.splice(0, shift);
        // for (const value of newArr) {
        //     arr.push(value);
        // }
        arr = arr.concat(newArr);
    }
    

    function sumPairs(sumPairs) {
        let sumArr = [];

        for (let i = 0; i < sumPairs.length; i++) {
            sumArr.push(arr[i] + arr[i + 1]);
            i++;
        }

       arr = sumArr;
    }

    function print(print) {
        console.log(print);
        return;
    }

    let shouldBreak = false;
    for (let i = 0; i < stringComands.length; i++) {
        if (shouldBreak) {
            break;
        }

        let [command, inx, element, ...nums] = stringComands[i].split(' ');
        inx = Number(inx);
        element = Number(element);

        switch (command) {
            case 'add':
                add(inx, element);
                break;
            case 'addMany':
                addMany(inx,element, ...nums)
                break;
            case 'contains':
                console.log(contains(arr, inx))
                break;
            case 'remove':
                remove(inx);
                break;
            case 'shift':
                shift(inx);
                break;
            case 'sumPairs':
                sumPairs(arr);
                break;
            case 'print':
                shouldBreak = true;
                print(arr);
                break;
        }

    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    
)