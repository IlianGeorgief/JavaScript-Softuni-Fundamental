function orders(product, quantity) {
    // let coffee = 1.50;
    // let water = 1.00;
    // let coke = 1.40;
    // let snacks = 2.00;

    switch (product) {
        case "water":
            return 1.00 * quantity;
        case "coffee":
            return 1.50 * quantity;
        case "coke":
            return 1.40 * quantity;
        case "snacks":
            return 2.00 * quantity;
    }

}
let result = orders("water", 5);
console.log(result.toFixed(2))