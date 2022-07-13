function wordsTracker(strings) {
    let lookingStrings = strings.shift().split(' ');
    let counter1 = 0;
    let map = new Map();
    let word1 = '';
    let counter2 = 0;
    let word2 = '';

    for (let word of strings) {

        if (word === lookingStrings[0]) {
            counter1++;
            word1 = word;
            map.set(word1, counter1)
        }
        if (lookingStrings[1] === word) {
            counter2++;
            word2 = word;
            map.set(word2, counter2)
        }
    }
    let arr = Array.from(map.entries());
    let sorted = arr.sort((a, b) => b[1] - a[1]);

    for (kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}
wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)