function neighborhoods(neighborhoodsAndPeople) {
    let someNeighborhoods = neighborhoodsAndPeople[0].split(',');
    let neighHood = new Map();
    
    for (let nHood of someNeighborhoods) {
        neighHood.set(nHood, []);

    }
    for (let i = 1; i < neighborhoodsAndPeople.length; i++) {
        let current = neighborhoodsAndPeople[i].split(' - ');
        let neighborhood = current[0];
        let person = current[1];

        if (someNeighborhoods.includes(neighborhood)) {
            neighHood.get(neighborhood).push(person);
        }
    }
    let arrFromNeighHood = Array.from(neighHood);
    let sorted = arrFromNeighHood.sort((a, b) => {

               return a.length - b.length;
    });

    // for (kvp of sorted) {
    //     let count = kvp[0].length - kvp[1].length; 
    //     console.log(`${kvp[0]}: ${count}\n--${kvp[1]}`);
    // }
console.log(neighHood)

}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)