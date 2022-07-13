function maxSequenceOfEqualElements(arr) {

    let bestElements = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        let element = arr[i];
        let currentSequence = [element];

        for (let index = i + 1; index < arr.length; index++) {
            let nextElement = arr[index];

            if (element === nextElement) {
                currentSequence.push(nextElement);
                i = index;
            } else {
                break;
            }
        }
        if (currentSequence.length > bestElements.length) {
            bestElements = currentSequence;
        }
    }
    console.log(bestElements.join(' '))
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 2, 6, 3, 3])

function maxSequenceOfEqualElements(arr) {
    // let currCount = 1
    let currValues = []
    let output = ""
    // let maxCount = 0
    // let maxElement = null

    // let isEqualToLastElement = false
    let lastElement = null


    for (let i = 0; i < arr.length; i++) {
        let currElement = arr[i]
        // let nextElement = arr[i + 1]

        if (currElement === lastElement) {
            // isEqualToLastElement = true
            // currCount += 1
            currValues.push(currElement)

            if (currCount > maxCount) {
                output = currValues.join(" ")
                // maxCount = currCount
                // maxElement = currElement
            }
        } else {
            // currCount = 1
            currValues = []
        }

        lastElement = currElement
        // isEqualToLastElement = false
    }
}