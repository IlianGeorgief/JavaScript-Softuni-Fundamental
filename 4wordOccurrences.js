function wordOccurrences(strings) {
    let words = new Map();
    let counter = 1;

    for (const string of strings) {
        let arr = string.split(' ');
        let name = arr.shift();

        if (words.has(name)) {
            name[counter];
            let oldWords = words.get(name);
            let sumCount = oldWords + counter++;
            words.set(name, sumCount);
            counter--;
        } else {
            let count = 1;
            words.set(name, count);
        }
    }

    let wordsEntries = Array.from(words.entries());
    let arrWords = wordsEntries.sort((a, b) => b[1] - a[1]);

    for (kvp of arrWords) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"])