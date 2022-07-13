function storeProvision(arr1, arr2) {
    let store = {};

    arr1.forEach((element, i) => {
        if (i % 2 === 0) {
            const product = element;
            const quantity = Number(arr1[i + 1]);
            store[product] = quantity;
        }
    });

    for (let i = 0; i < arr2.length; i += 2) {
        const product = arr2[i];
        const quantity = Number(arr2[i + 1]);
        if (store[product] === undefined) {
            store[product] = 0;
        }
        store[product] += quantity;
    }

    for(const product in store) {
        console.log(`${product} -> ${store[product]}`);
    }

    console.log(store)
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)