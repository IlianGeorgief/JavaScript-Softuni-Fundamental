function passwordValidator(password) {

    let isDigit = (x) => x >= 48 && x <= 57;

    if (!isLength(password)) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isAlphabet(password)) {
        console.log('Password must consist only of letters and digits');
    }

    if (!isContainsTwoDigit(password)) {
        console.log('Password must have at least 2 digits');
    }

    if (isLength(password) && isAlphabet(password) && isContainsTwoDigit(password)) {
        console.log('Password is valid');
    }

    function isLength(pass) {
        const a = pass.length >= 6 && pass.length <= 10;
        return a
    }

    function isAlphabet(pass) {

        let isLowerLetter = (x) => x >= 87 && x <= 122;
        let isUpperLetter = (x) => x >= 65 && x <= 90;

        let isOk = true;

        for (let char of pass) {
            let n = char.charCodeAt(0);

            if (!isDigit(n) && !isLowerLetter(n) && !isUpperLetter(n)) {
                isOk = false;
                break;
            }
        }
        return isOk;
    }

    function isContainsTwoDigit(pass) {
        let counter = 0;
        isOk = false;

        for (let char of pass) {
            let n = char.charCodeAt(0);

            if (isDigit(n)) {
                counter++
            }
            if (counter === 2) {
                isOk = true;
                break;
            }
        }

        return isOk;
    }
}
passwordValidator('logIn')