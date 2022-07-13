function employees(arrStrings) {
    class Employees {
        constructor(name) {
            this.name = name;

        }
    }

    let names = [];
    let sumOfSymbols = 0;
    for (let i = 0; i < arrStrings.length; i++) {
        let name = arrStrings[i];
        let someName = new Employees(name);
        names.push(someName);
        sumOfSymbols = name.length;
        console.log(`Name: ${name} -- Personal Number: ${sumOfSymbols}`);
        sumOfSymbols = 0;
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)