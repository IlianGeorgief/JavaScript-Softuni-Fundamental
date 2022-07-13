function loadingBar(num) {
    let persent = num / 10;
    let printPersents = printPersent(persent);
    let comma = printComma(10 - persent);

    function printPersent(number) {
        let print = "";
        for (let i = 1; i <= number; i++) {
            print += "%";
        }
        return print;
    }

    function printComma(comm) {
        let commas = "";
        for (let i = 0; i < comm; i++) {
            commas += ".";
        }
        return commas;
    }

    if (persent < 10) {
        console.log(`${num}% [${printPersents}${comma}]`)
        console.log(`Still loading${comma}`)
    } else {
        console.log(`${num}% Complete!`);
        console.log(`[${printPersents}]`)
    }

}
loadingBar(10)