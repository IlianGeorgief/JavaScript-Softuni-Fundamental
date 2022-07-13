function city(name, area, population, country, postcode) {
    let city = {
        name: name,
        area: area,
        population: population,
        country: country,
        postcode: postcode
    };

    for (key in city) {
        console.log(`${key} -> ${city[key]}`);
    }

}
city("Sofia", " 492", "1238438", "Bulgaria", "1000")