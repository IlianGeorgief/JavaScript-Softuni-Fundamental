function charactersInRange(firstChar, lastChar) {
    let firstValue = getNumberValue(firstChar);
    let lastValue = getNumberValue(lastChar);    
    let allSymbols = getCharRange(firstValue, lastValue);

    getCharRange(firstValue, lastValue);

    console.log(joinSymbols(allSymbols, " "));

    function getNumberValue(char) {
        return char.charCodeAt(0);
    }

    function getCharValue(number) {
        return String.fromCharCode(number);
    }

    function getCharRange(firstValue, lastValue) {
        let characters = [];

        for (let i = (firstValue + 1); i < lastValue; i++) {
            let symbol = getCharValue(i);
            characters.push(symbol);
        }

        return characters;
    }
    function joinSymbols(arr, separator) {
        let result = '';
        for (let index in arr) {
            let character = arr[index];

            if (index <= arr.length - 2) {
                result += `${character}${separator}`;
            } else {
                result += character;
            }
        }
        return result;
    }
}

charactersInRange('#', ':')