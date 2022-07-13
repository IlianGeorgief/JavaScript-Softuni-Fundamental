function istOfProducts(fruits) {
    let newFruits = fruits.sort();

    for (let i = 0; i < newFruits.length; i++) {
        console.log(`${i + 1}.${newFruits[i]}`);
    }    

}
istOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])