function towns(strings) {
    let object = {};

    for (let i = 0; i < strings.length; i++) {
        let [town, latitude, longtude] = strings[i].split('|');
        object.town = town; object.latitude = Number(latitude).toFixed(2);
         object.longtude = Number(longtude).toFixed(2);
        console.log(object);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)