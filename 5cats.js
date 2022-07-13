function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    arr.map(x => {
        let [name, ageText] = x.split(' ');

        let cat = new Cat(name, Number(ageText));
        return cat;
    }).forEach(x => x.meow());

    
}
cats(['Mellow 2', 'Tom 5', 'Stamat 3'])